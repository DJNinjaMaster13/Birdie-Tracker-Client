import React, { Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import LoginMessage from "./login-message.component";

class CreateScorecard extends Component {

    constructor(props) {
        super(props);

        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateScores = this.updateScores.bind(this);
        this.onChangeScores = this.onChangeScores.bind(this);

        const {isAuthenticated } = this.props.auth0;

        if (isAuthenticated) {
          const { user } = this.props.auth0;
          const {nickname, email} = user;
          this.state = {
            username: nickname,
            course: '',
            score: 0,
            par: 0,
            scores: [],
            date: new Date(),
            users: [],
            courses: [],
            isAuth: isAuthenticated,
            userAccount: null,
          }
        }

        else {
          this.state = {
            username: '',
            course: '',
            score: 0,
            par: 0,
            scores: [],
            date: new Date(),
            users: [],
            courses: [],
            isAuth: false,
            userAccount: null,
        }
        }

    }

    componentDidMount() {

      //user must be logged in or else we will be adding blank user objects
      if (this.state.isAuth) {

        //load in user data 
        axios.get('https://birdie-tracker.herokuapp.com/users/')
        .then(response => {
          if (response.data.length > 0) {

            let matched = false;
            //search through the users and find the one associated with our logged in user
            for (let i = 0; i < response.data.length; i++) {
              if (response.data[i].username == this.state.username) {
                  console.log("Match found");

                  //once correct user is found, save their info in the state to be used later
                  //when updating the user object. 
                  this.setState(state => ({
                    ...state,
                    userAccount: response.data[i],
                  }))
                  matched = true;
                  break;
              }
            }
          }
        })

        //load in course data for dropdown select
        axios.get('https://birdie-tracker.herokuapp.com/courses/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState(state => ({...state,
              courses: response.data,
              course: response.data[0].name,
              scores: response.data[0].holes,
              holes: response.data[0].holes,
              par: response.data[0].par,
            }), () => {
              //callback function to ensure state is updated before elements are rendered
            })
          }
        })
      }
    }

    //loops through the courses array to find the one the user selected
    //then updates the state with the corresponding values for scores and par
    //so that the form elements for the individual scores can be rendered
    updateScores() {
      //set the number of holes based on which course is selected
      for (let i = 0; i < this.state.courses.length; i++) {
        if (this.state.courses[i].name == this.state.course) {
          this.setState(state=> ({...state, 
            scores: this.state.courses[i].holes,
            par: this.state.courses[i].par}), () => {
            //callback function to ensure state is updated before elements are rendered

          });
        }
      }
    }

    //triggered by the user changing the score for an individual hole
    onChangeScores = idx => e => {
      const newScores = this.state.scores.map((score, sidx) => {
          if (idx !== sidx) return score;
          return {...score, par: e.target.value };
      });

      this.setState(state => ({...state, scores: newScores}), () => {
        //callback function to ensure state is updated before elements are rendered
      });
  }

    //triggered by the user changing the course
    //calls updateScores() function to re-render the holes for the newly selected course
    onChangeCourse(e) {
        this.setState(state => ({...state, course: e.target.value}), () => {
          this.updateScores();
        })
    }

    //triggered by the user changing the date in the select field
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        //calculate the total score based on the individual holes
        let round_score = 0;
        for (let i = 0; i < this.state.scores.length; i++) {
          round_score = round_score + parseInt(this.state.scores[i].par);
        }

        //set the score in the state and wait to post the new
        //scorecard until the state is updated by using
        //callback function
        this.setState(state => ({...state, score: round_score}), () => {

          const scorecard = {
            username: this.state.username,
            course: this.state.course,
            score: this.state.score,
            date: this.state.date,
            scores: this.state.scores,
            par: this.state.par
          }

          axios.post('https://birdie-tracker.herokuapp.com/scorecards/add', scorecard)
          .then(res => console.log(res.data));

        })

        //can only update user statistics if a user account exists
        if (this.state.userAccount != null) {

          let new_best = this.state.userAccount.best_score;
          let new_worst = this.state.userAccount.worst_score;
          let score = round_score - this.state.par;
          if ( score < this.state.userAccount.best_score) {
            new_best = score;
          }
          if ( score > this.state.userAccount.worst_score) {
            new_worst = score;
          }
          

          const user = {
            username: this.state.userAccount.username,
            //update the user object by adding one to the number of rounds played
            rounds_played: this.state.userAccount.rounds_played + 1,
            best_score: new_best,
            worst_score: new_worst,
          }
  
          console.log(user);
          
          //update the user object in the database
          axios.post('https://birdie-tracker.herokuapp.com/users/update/'+this.state.userAccount._id, user)
          .then(res => console.log(res.data))
          .catch((error) => {
            console.log(error);
          })

        }
        //took this out for testing
        //window.location = 'https://dreamy-mcnulty-8d46e1.netlify.app/scorecardlist';
    }

    render() {

      if (!this.state.isAuth) { 
        return (
            <div>
              <LoginMessage/>
            </div>
        )
      }

        return (
        <div className = "scorecard_elements">

          <div className ="profile_header">
            <h3>Create Scorecard</h3>
          </div>

          <form onSubmit={this.onSubmit}>

            <div className="form-group"> 
              <label>Course: </label>
              <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.course}
                  onChange={this.onChangeCourse}>
                  {
                    this.state.courses.map(function(course) {
                      return <option 
                        key={course.name}
                        value={course.name}>{course.name}
                        </option>;
                    })
                  }
              </select>
            </div>

            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
            
            <div className="score_boxes">
              {this.state.scores.map((score, idx) => (
                  <div className="score" key={score._id}>
                    <label>Hole {idx + 1} score: </label>
                      <div>
                        <input
                            type="number"
                            value={score.par}
                            onChange={this.onChangeScores(idx)}
                        />
                      </div>
                  </div>
              ))}
            </div>

            <div className="form-group">
              <input type="submit" value="Create Scorecard" className="btn btn-primary" />
            </div>
          </form>

        </div>
        )
      }
}

//export withAuth0 to allow use of user's username for the scorecard
export default withAuth0(CreateScorecard);
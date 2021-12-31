import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import LoginMessage from "./login-message.component";
import Loading from "./loading-component";

//creates a JSX element from the given scorecard properties
//referenced in the scorecardList() function
const Scorecard = props => (
    <tr>
      <td>{props.scorecard.username}</td>
      <td>{props.scorecard.course}</td>
      <td>{props.scorecard.score} / {props.scorecard.par}</td>
      <td>{props.scorecard.date.substring(0,10)}</td>
      <td>
        <Link to={"/editscorecard/"+props.scorecard._id}>edit</Link> | <a href="#" onClick={() => { props.deleteScorecard(props.scorecard._id) }}>delete</a>
      </td>
    </tr>
)

class ScorecardList extends Component {

    constructor(props) {
        super(props);
       
        this.state = {scorecards: []};
        this.deleteScorecard = this.deleteScorecard.bind(this);
        
    }

    componentDidMount() {

        //get the scorecard data from the server
        axios.get('https://birdie-tracker.herokuapp.com/scorecards/')
        .then(response => {
            this.setState({ scorecards: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //sends a delete request to the server and then filters
    //the array to remove the deleted scorecard
    deleteScorecard(id) {
        axios.delete('https://birdie-tracker.herokuapp.com/scorecards/' + id)
        .then(res => console.log(res.data));

        this.setState({
            scorecards: this.state.scorecards.filter(el => el._id !== id)
        })
    }

    //maps each scorecard into a JSX element to be rendered
   
    scorecardList() {

      const { isAuthenticated, user } = this.props.auth0;
      const {nickname} = user;

      if (isAuthenticated) {
        return this.state.scorecards.map(currentscorecard => {
          //only shows the scorecards for the logged in user.
          if (currentscorecard.username == nickname) {
            return <Scorecard scorecard={currentscorecard} deleteScorecard={this.deleteScorecard} key={currentscorecard._id}/>;
          }
        })
      }
    }

    render() {

      const { isLoading, isAuthenticated } = this.props.auth0;

      if (isLoading) {
        return <Loading />;
      }

      if (!isAuthenticated) { 
        return (
            <div>
              <LoginMessage/>
            </div>
        )
      }
      
      return (

        <div className="white_background">
          <h3>Logged Scorecards</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Course</th>
                <th>Score</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.scorecardList() }
            </tbody>
          </table>
        </div>
      )
      }
}

//export withAuth0 to allow use of user's username for the scorecard
export default withAuth0(ScorecardList);
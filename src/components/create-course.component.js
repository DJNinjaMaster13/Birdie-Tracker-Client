import React, { Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import LoginMessage from "./login-message.component";


class CreateCourse extends Component {


    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeHoles = this.onChangeHoles.bind(this);
        this.onAddHole = this.onAddHole.bind(this);
        this.onRemoveHole = this.onRemoveHole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        const { isAuthenticated } = this.props.auth0;

        if (isAuthenticated) {
          const { user } = this.props.auth0;
          const {nickname, email} = user;
          this.state = {
            name: '',
            location: '',
            holes: [],
            par: 0,
            isAuth: isAuthenticated
            }
        }

        else {
            this.state = {
                name: '',
                location: '',
                holes: [],
                par: 0,
                isAuth: false
            }
        }
    }

    componentDidMount() {
        
    }

    //triggered by the user changing the username in the select field
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    //triggered by the user changing the location in the select field
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    //triggered by the user clicking the "add hole" button
    onAddHole = () => {
        this.setState({
            holes: this.state.holes.concat([{par: 3}])
        })
    }

    //triggered by the user clicking the "-" button to remove a hole
    onRemoveHole = idx => () => {
        this.setState({
            holes: this.state.holes.filter((s, sidx) => idx !== sidx)
        })
    }

    //triggered if the user changes the par value for a certain hole
    onChangeHoles = idx => e => {
        const newHoles = this.state.holes.map((hole, sidx) => {
            if (idx !== sidx) return hole;
            return {...hole, par: e.target.value };
        });

        this.setState(state => ({...state, holes: newHoles}), () => {
            //callback function to ensure state is updated before elements are rendered
        });
    }

    onSubmit(e) {
        e.preventDefault();

        //calculate the overall par for the entire course to be stored in the state
        let temp = 0;
        for (let i = 0; i < this.state.holes.length; i++) {
            temp = temp + parseInt(this.state.holes[i].par);
        }

        //store the overall par score in the state
        this.setState(state => ({...state, par: temp}), () => {
            //callback function to ensure state is updated before elements are rendered

            const course = {
                name: this.state.name,
                location: this.state.location,
                holes: this.state.holes,
                par: this.state.par            
            }
            
            //post the course to the database
            axios.post('https://birdie-tracker.herokuapp.com/courses/add', course)
            .then(res => console.log(res.data));
        
            //redirect back to the course list page
            window.location = 'https://dreamy-mcnulty-8d46e1.netlify.app/courselist';
        });

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
        <div className="scorecard_elements">

            <div className ="profile_header">
                <h3>Create Course</h3>
            </div>

          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
                </div>
            <div>
                
            </div>
            <div className="form-group"> 
              <label>Location: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.location}
                  onChange={this.onChangeLocation}
                  />
            </div>

            <div className="score_boxes">
                {this.state.holes.map((hole, idx) => (
                    <div className="hole" key={hole._id}>
                        <input
                            type="number"
                            value={hole.par}
                            onChange={this.onChangeHoles(idx)}
                        />
                        <button
                            type = "button"
                            onClick={this.onRemoveHole(idx)}
                            className="small"
                        >
                            -
                        </button>
                    </div>
                ))}
            
                <button
                    type="button"
                    onClick={this.onAddHole}
                    className="small"
                >
                    Add Hole
                </button>

            </div>

            <div className="form-group">
              <input type="submit" value="Create Course" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
}

export default withAuth0(CreateCourse);
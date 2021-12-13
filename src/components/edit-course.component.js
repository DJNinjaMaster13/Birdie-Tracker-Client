import React, { Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditCourse extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeHoles = this.onChangeHoles.bind(this);
        this.onAddHole = this.onAddHole.bind(this);
        this.onRemoveHole = this.onRemoveHole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            location: '',
            holes: [],
            par: 0,
        }
    }

    componentDidMount() {

        //get currrent course data to populate state variables
        axios.get('https://birdie-tracker.herokuapp.com/courses/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                name: response.data.name,
                location: response.data.location,
                holes: response.data.holes,
                par: response.data.par,
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    //triggered by user changing course name in the select field
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    //triggered by the user changing location in the select field
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }

    //triggered when user clicks "add hole" button
    onAddHole = () => {
        this.setState({
            holes: this.state.holes.concat([{par: 3}])
        })
    }

    //triggered by user clicking "-" button to remove a hole
    onRemoveHole = idx => () => {
        this.setState({
            holes: this.state.holes.filter((s, sidx) => idx !== sidx)
        })
    }

    //triggered by user changing the par value of a single hole
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

        //calculate the total par for the entire course
        let temp = 0;
        for (let i = 0; i < this.state.holes.length; i++) {
            temp = temp + parseInt(this.state.holes[i].par);
        }

        //store the total par in the state and then save the updated course object
        this.setState(state => ({...state, par: temp}), () => {
            //callback function to ensure state is updated before elements are rendered
        
            const course = {
                name: this.state.name,
                location: this.state.location,
                holes: this.state.holes,
                par: this.state.par 
            }
    
            axios.post('https://birdie-tracker.herokuapp.com/courses/update/'+this.props.match.params.id, course)
            .then(res => console.log(res.data))
            .catch((error) => {
              console.log(error);
            })
    
            //redirect the user back to the course list page
            window.location = 'https://dreamy-mcnulty-8d46e1.netlify.app/courselist';
        });
    }

    render() {
        return (
        <div>
          <h3>Change Courses</h3>
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
    
            <div className="form-group">
              <input type="submit" value="Submit Changes" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
}
import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//creates a JSX element from given course properties
//referenced in the courseList() function
const Course = props => (
    <tr>
      <td>{props.course.name}</td>
      <td>{props.course.location}</td>
      <td>{props.course.holes.length}</td>
      <td>
        <Link to={"/editcourse/"+props.course._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCourse(props.course._id) }}>delete</a>
      </td>
    </tr>
)

export default class CourseList extends Component {

    constructor(props) {
        super(props);

        this.deleteCourse = this.deleteCourse.bind(this);

        this.state = {courses: [] };
    }

    componentDidMount() {

        //get course data from database
        axios.get('https://birdie-tracker.herokuapp.com/courses/')
        .then(response => {
            this.setState({ courses: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    //sends a delete request to the database
    //and then filters the deleted course from the array
    deleteCourse(id) {
        axios.delete('https://birdie-tracker.herokuapp.com/courses/' + id)
        .then(res => console.log(res.data));

        this.setState({
            courses: this.state.courses.filter(el => el._id !== id)
        })
    }

    //maps the course array into individual 
    //JSX elements to be rendered
    courseList() {
        return this.state.courses.map(currentcourse => {
          return <Course course={currentcourse} deleteCourse={this.deleteCourse} key={currentcourse._id}/>;
        })
      }

    render() {
        return (
          <div className="white_background">
            <h3 >Course List</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Holes</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.courseList() }
              </tbody>
            </table>
            
          </div>
        )
      }
}
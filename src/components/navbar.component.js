import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">BirdieTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/scorecardlist" className="nav-link">Scorecards</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createscorecard" className="nav-link">Create Scorecard</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createuser" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createcourse" className="nav-link">Create Course</Link>
          </li>
          <li className="navbar-item">
          <Link to="/courselist" className="nav-link">Course List</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';

import ScorecardsList from "./components/scorecards-list.component";
import EditScorecards from "./components/edit-scorecards.component";
import CreateScorecard from "./components/create-scorecard.component";
import CreateCourse from "./components/create-course.component";
import CourseList from "./components/course-list.component";
import EditCourse from "./components/edit-course.component";
import Homepage from "./components/homepage-component";
import Navbar2 from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profile from "./components/profile.component";
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

function App() {

  //used to toggle the sidebar display
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Auth0ProviderWithHistory>
        <div className="container">
          
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar2 toggle={toggle}/>
          <br/>
          <Route path="/" exact component = {Homepage} />
          <Route path="/scorecardlist" component = {ScorecardsList} />
          <Route path="/editscorecard/:id" component = {EditScorecards} />
          <Route path="/createscorecard" component={CreateScorecard} />
          <Route path="/createcourse" component={CreateCourse} />
          <Route path="/courselist" component = {CourseList} />
          <Route path="/editcourse/:id" component = {EditCourse} />
          <Route path="/profile" component={Profile} />
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;

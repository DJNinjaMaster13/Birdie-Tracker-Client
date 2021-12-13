import React, { Component} from 'react';
import axios from 'axios';
import logo from '../Images/dgbasket.jpg';
import AuthenticationButton from "./authentication-button";

export default class Homepage extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        return (
          <div>

            <div>
              <h3 className="header_centered">Welcome to BirdieTracker!</h3>
            </div>

            <img src={logo} width="600" height="600" className="center_div_horz"/>

            <div className ="profile_message">
                <h2>Your personal disc golf score tracking assistant</h2>
            </div>

          </div>
        )
      }
}
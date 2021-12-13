import React, {useState, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import LoginMessage from "./login-message.component";
import axios from 'axios';

const Profile = () => {
    const {isAuthenticated, user} = useAuth0();
    const [matched, setMatched] = useState(false);
    const [player, setPlayer] = useState(0);

    useEffect(() => {

        //need to find associated user object to be able to display user
        //profile information and statistics
        if (!matched && isAuthenticated) {
            const {nickname} = user;
            //load in user data 
            axios.get('https://birdie-tracker.herokuapp.com/users/')
            .then(response => {
                let player_found = false;
                if (response.data.length > 0) {

                    //search through the users and find the one associated with our logged in user
                    for (let i = 0; i < response.data.length; i++) {
                        if (response.data[i].username == nickname) {
                            console.log("Player found in DB");
                            console.log(response.data[i]._id); //need this to edit the user later on
                            player_found = true;
                            setPlayer(response.data[i]); //save player object to state for later use
                            break;
                        }
                    }

                    //if we couldn't find the associated user, create a new user object
                    //this object is associated with the user's authentication credentials
                    //and will be used to store the user's statistics in the DB. 
                    if (!player_found) {
                        const user = {
                            username: nickname,
                            rounds_played: 0,
                            best_score: 999,
                            worst_score: -999,
                        }
                        setPlayer(user);
            
                        axios.post('https://birdie-tracker.herokuapp.com/users/add', user)
                        .then(res => console.log(res.data));
                        player_found = true;
                    }
                }

                //if no users exist, then go ahead and create a new user object
                //this object is associated with the user's authentication credentials
                //and will be used to store the user's statistics in the DB. 
                else {

                    const user = {
                    username: nickname,
                    rounds_played: 0,
                    best_score: 999,
                    worst_score: -999,
                    }
                    setPlayer(user);
        
                    axios.post('https://birdie-tracker.herokuapp.com/users/add', user)
                    .then(res => console.log(res.data));
                    player_found = true;
                }
                setMatched(player_found);
                console.log(matched);
            })
            
        }

    });

    const resetStats = (e) => {
        
        e.preventDefault();

        //can only update user statistics if a user account exists
        if (player != 0) {

            //reset player stats
            const user = {
              username: player.username,
              rounds_played: 0,
              best_score: 999,
              worst_score: -999,
            }
            console.log(user);
            
            //update the user object in the database
            axios.post('https://birdie-tracker.herokuapp.com/users/update/'+player._id, user)
            .then(res => console.log(res.data))
            .catch((error) => {
              console.log(error);
            })

            //will need to set matched to false so that the page re-loads the user-object from DB with
            //the updated statistics
            setMatched(false);
          }
    }

    if (isAuthenticated) {
        const {nickname, email, last_login} = user;

        const test = matched;
        
        return (
            <div>
                <div className ="profile_header">
                    <h2>Personal Information:</h2>
                </div>

                <div className = "personal_info">
                    <h3>Username: {nickname}</h3>
                    <h3>Email: {email}</h3>
                </div>

                <div className ="profile_header">
                    <h2>Stats:</h2>
                </div>

                <div className = "statistics">
                    <h3>Rounds Played: {player.rounds_played}</h3>
                    <h3>Best Score: {player.best_score}</h3>
                    <h3>Worst Score: {player.worst_score}</h3>

                    <form onSubmit={resetStats}>
                        <div className="top_margin">
                            <input type="submit" value="Reset Player Stats" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>

            </div>
        );
    }

    else {
        return (
            <div>
              <LoginMessage/>
            </div>
        )
    }
    
};

export default Profile;
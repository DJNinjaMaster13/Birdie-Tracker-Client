import React, { Component} from 'react';
import AuthenticationButton from "./authentication-button";

const LoginMessage = () => {

    return (
        <div className="outer_container">
            <div className="center_horz_vert">
                <div className="center_div_vert">
                    <h1>Please log in to view this page!</h1>
                </div>
                
                <div className="center_button">
                    <AuthenticationButton className="center"/>
                </div>
                
            </div>
        </div>
    );
};

export default LoginMessage;
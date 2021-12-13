import React, { Component} from 'react';
import load_image from '../Images/hourglass1.jfif';


const Loading = () => {

    return (
        <div className="outer_container">
            <div className="loading">
                <h2>LOADING...</h2>
                <div className="loading_image">
                    <img src={load_image} width="100" height="100"/>
                </div>
            </div>   
        </div>
    );
};

export default Loading;
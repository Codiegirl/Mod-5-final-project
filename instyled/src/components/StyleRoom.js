import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';



export default class StyleRoom extends React.Component {
    state = {
        
    }
    render() {
        return(
            <div className="main">
                <h1>Comments</h1>
                <ul>
                    <li>{this.props.message}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        )
    }
}


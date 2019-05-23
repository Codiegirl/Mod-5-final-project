import React, { Component } from 'react';

import { connect } from 'react-redux'//a function that creates anonther function to connect a component to a store

const mapStateToProps = state => {
    return {
        health:  state.something//props to get data out of state and into a component
                                //this is the state from index.js
    }

}

const mapDispatchToProps = {
//create the props that are functions
}

const myConnector = connect(mapStateToProps, mapDispatchToProps)

class _StyleRoom extends Component {
    render() {
        return (null)//pass props here)
    }
}

export const StyleRoom = myConnector(_StyleRoom)
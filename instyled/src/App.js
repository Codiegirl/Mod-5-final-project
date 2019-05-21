import React from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar'
import LoginCard from './components/LoginCard'
import PhotoContainer from './containers/PhotoContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'





class App extends React.Component{
  render(){

    return (
      //switch will render whichever route matches first
      <BrowserRouter>
          <NavBar/>
        <Switch>
          
          <Route path="/home-page" component={Home}/>
          <Route path="/login" component={LoginCard}/>
          <Route path="/photos" component={PhotoContainer}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
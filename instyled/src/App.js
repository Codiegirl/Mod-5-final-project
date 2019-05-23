import React from 'react';
import NavBar from './components/NavBar'
import LoginCard from './components/LoginCard'
import PhotoContainer from './containers/PhotoContainer'
import ProfileContainer from './containers/ProfileContainer'
import IntroPhotoCard from './components/IntroPhotoCard'
import Stylist from './components/Stylist'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'





class App extends React.Component{
  render(){

    return (
      //switch will render whichever route matches first
      <BrowserRouter>
          <NavBar/>
        <Switch>
          <Route path="/home-page" component={IntroPhotoCard}/>
          <Route exact path="/stylists" component={ProfileContainer}/>
          <Route exact path="/stylists/:id" component={Stylist}/>
          <Route path="/login" component={LoginCard}/>
          <Route path="/photos" component={PhotoContainer}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
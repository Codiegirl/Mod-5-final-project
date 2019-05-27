import React from 'react';
import NavBar from './components/NavBar'
import LoginCard from './components/LoginCard'
import PhotoContainer from './containers/PhotoContainer'
import ProfileContainer from './containers/ProfileContainer'
import BookingCard from './components/BookingCard'
import NewUser from './components/NewUser'
import IntroPhotoCard from './components/IntroPhotoCard'
import SingleStylist from './components/SingleStylist'
import StyleRoom from './components/StyleRoom'
import { Redirect } from 'react-router'
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
          <Route exact path="/stylists/:id" component={SingleStylist}/>
          <Route path="/photos" component={PhotoContainer}/>
          <Route path="/login" component={LoginCard}/>

          {/* <Route exact path="/" render={() => (loggedIn ? (
              <Redirect to="/home-page"/>) : (
                <PublicHomePage/>
              )
            )}/> */}
          <Route path="/chat/:id" component={StyleRoom}></Route>
          <Route path="/stylists/:id/booking" component={BookingCard}/>
          <Route path="/new" component={NewUser}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;


import React from 'react';
import socketIO from 'socket.io-client'
import ProfileContainer from './containers/ProfileContainer'
import PhotoContainer from './containers/ProfileContainer'
import NavBar from './components/NavBar'
import IntroPhotoCard from './components/IntroPhotoCard'


const io = socketIO('localhost:8080')//your ip address with the port number


window.io = io

export default class App extends React.Component {
  state = {
    stylists: []
  }

  componentDidMount(){
    io.emit('stylists.index', stylists => {
        this.setState({ stylists })
    })
    io.on('stylists.update', stylists => {//start listineing for when stylists are updated
        this.setState({ stylists }) //put them in state, then on the backend 
    })

  } 

  saveStylist(stylist){
    io.emit('stylist.update', stylist)
  }

  render(){
    let allStylists = this.state.stylists
  
    return (
    
    <div>
    <ProfileContainer allStylists = {allStylists}/>
    <PhotoContainer allStylists = {allStylists}/> 
    <IntroPhotoCard/>
    <NavBar/>
    </div>
  );
}
}

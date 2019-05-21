import React from 'react'
import socketIO from 'socket.io-client'
import ProfileContainer from '../containers/ProfileContainer'
import PhotoContainer from '../containers/PhotoContainer'
// import NavBar from './NavBar'
// import LoginCard from './LoginCard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IntroPhotoCard from './IntroPhotoCard'



const io = socketIO('localhost:8080')//your ip address with the port number


window.io = io

export default class Home extends React.Component {
  state = {
    stylists: [],
    users: []
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
  checkAuth = () => {
    if(localStorage.getItem('token') !== null){
      fetch('http://localhost:3000/stylists', {
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) =>  res.json())
      .then((users) => this.setState({
        users: users,
        
      }))
    }
  }
  
  // componentDidMount(){
  //   this.checkAuth()
  //   }
  // }
  

  render(){
    let allStylists = this.state.stylists
  console.log(allStylists)
    return (
    
    <div>
     
      <ProfileContainer allStylists = {allStylists}/>
      <PhotoContainer allStylists = {allStylists}/> 
      <IntroPhotoCard/>
    
    // </div>
   );
}
}
/* <Router>
    //       <div>
    //         <NavBar/>
    //         {/* <Home/> */
    //         <Switch>
    //           <Route exact path='/' component={Home}/>
    //           <Route path="/login" render={() => <LoginCard checkAuth={this.checkAuth}  users={this.state.users}/>}/>
              
              
    //         </Switch>
    //       </div>
    //   </Router> */}
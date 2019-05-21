import React from 'react'
import PhotoCard from '../components/PhotoCard'
import socketIO from 'socket.io-client'

const io = socketIO('localhost:8080')//your ip address with the port number


export default class PhotoContainer extends React.Component {


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



    render(){
        return (
            <div>
                <h1>scroll</h1>
                {this.state.stylists.map( stylist => (
                <PhotoCard 
                    {...stylist}/>
            ))} 
            </div>
        )
    }
}
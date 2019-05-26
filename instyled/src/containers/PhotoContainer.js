import React from 'react'
import PhotoCard from '../components/PhotoCard'
import { io } from '../socket'



export default class PhotoContainer extends React.Component {


    state = {
        stylists: [],
        users: [],
        
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
      console.log(this.state.stylists)
        return (
          
            <div>
                {/* <h1></h1> */}
                {this.state.stylists.map( stylist => (
                  stylist.images.map(image => (
                    <PhotoCard
                    image={image.image}
                    id={stylist.id}/>
                    
                  ))
                
            ))} 
            </div>
        )
    }
}
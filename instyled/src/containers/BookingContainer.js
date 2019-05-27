import React from 'react'
import BookingCard from '../components/BookingCard'
import { io } from '../socket'


export default class ProfileContainer extends React.Component {

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

    render(){
        console.log(this.state)
        return (
            
                
            {this.state.stylists.map(stylist => (
                <BookingCard
                {...stylist}/>
            
            ))}
            
        )
             
        
    }
}
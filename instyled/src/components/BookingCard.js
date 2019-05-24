import React from 'react'
import { io } from '../socket'




export default class BookingCard extends React.Component{

    state = {
        currentStylist: {}
        }
    
        componentDidMount(){
            fetch(`http://localhost:3000/stylists/${this.props.match.params.id}`, {
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(stylist => 
                    this.setState({currentStylist: stylist}))
                   
                }
            
        
    render(){
        
        return(
            <div className="rounded">
                <img className="rounded img" src={this.state.currentStylist.photo} width ="500px" height ="400px"/>
            </div>
        )
    }
}

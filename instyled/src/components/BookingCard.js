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
            <div>
                <div id= "showcase" className="rounded one" >
                    <img className="rounded img" src={this.state.currentStylist.photo} width ="300px" height ="300px"/>
                </div><br/><br/><br/><br/><br/><br/><br/><br/>
                <div id="content" className="container">
                    Living and loving at the same time
                </div>
                    <a href="#" className="btn">Read More</a>
            </div>
        )
    }
}

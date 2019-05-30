import React from 'react'
import price from '../assets/images/packageprice.png'
import book from '../assets/images/bookingprice.png'
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
            <div className="main">
                
                <div id= "showcase" className="rounded one" style={{"text-align": "center"}} >
                    <div className="book-name">Book with {this.state.currentStylist.name}</div>
                    <img className="rounded img" src={this.state.currentStylist.photo} width ="300px" height ="300px"/>
                </div>
                <div id="content" className="container" style={{"margin-top": "200px"}}>
                    
                    <img center src={book} style={{width: 500, height: 500}}></img>
                    <div className="flexbox-item-stylist-3">
                        
                    </div>
                </div>
                    
            </div>
        )
    }
}

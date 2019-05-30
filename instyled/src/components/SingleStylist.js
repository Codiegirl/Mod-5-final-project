import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import greenskirt from '../assets/images/greenskirt.png'
import pinkdress from '../assets/images/pinkdress.png'
import man from '../assets/images/justin3.png'
import look1 from '../assets/images/favoritelook1.png'
import look2 from '../assets/images/favoritelook2.png'
import look3 from '../assets/images/favoritelook3.png'


class SingleStylist extends React.Component {

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
        
        
        
        return (
            
            <div className="main">
                <div className ="flexbox-container">
                    <div className="flexbox-item flexbox-item-1">
                        <div className="rounded">
                            <img className="rounded img" style={{ marginTop: '35px'}}src={this.state.currentStylist.photo}width ="500px" height ="400px"/>
                        </div>
                    </div>
                    <div className="flexbox-item flexbox-item-2">
                        <h3 className="bio-name">{this.state.currentStylist.name}</h3>
                            <h2>{this.state.currentStylist.specialty}</h2><br></br><br/><br></br><br/>
                            <h2>{this.state.currentStylist.bio}</h2><br></br><br/><br></br>
                            <Link to= {`/stylists/${this.state.currentStylist.id}/booking`}>
                            <button className="book-button"onClick ={() => this.props.history.push(`/stylists/${this.state.currentStylist.id}`)}>Book {this.state.currentStylist.name}</button></Link>
                        
                    </div>
                    </div>

                    
                        <br></br><br></br><br></br>
                        <h1 className="singlestylist"> Favorite Looks</h1>
                        <br></br><br></br><br></br>
                        <div className ="flexbox-container-1">
                   <div className="flexbox-item-intro-1">
                       <img src={look1} style={{width: 450, height: 500}}></img>
                   </div>

                   <div className="flexbox-item-intro-2">
                       <img src={look2} style={{width: 450, height: 500}}></img>
                    </div>
                       
                   
                  
                   <div className="flexbox-item-intro-3">
                     <img src={look3} style={{width: 450, height: 500}}></img>
                   </div>
                   </div>

                   <div>
                   <br></br><br></br><br></br><br></br>
                   <h1 className="singlestylist"> Tips</h1>
                 <div className="flexbox-item-stylist-1">
                 <br></br><br></br><br></br><br></br><img src={pinkdress} style={{width: 450, height: 500}}></img>
                       <img src={greenskirt} style={{width: 450, height: 500}}></img>
                   </div></div>
                   <div className="flexbox-item-stylist-3">
                   <img src={man} style={{width: 450, height: 500}}></img>
                   </div>

                   </div>


           
                    
                    
                 
                   
                    
                    
      
                    
      
                    
        )
    }
}

export default withRouter(SingleStylist)
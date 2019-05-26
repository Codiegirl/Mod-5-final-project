import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


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
        console.log(this.props)
        
        
        return (
            
            <div>
                <div className ="flexbox-container">
                    <div className="flexbox-item flexbox-item-1">
                    <div className="rounded">
                    <img className="rounded img" src={this.state.currentStylist.photo}width ="700px" height ="600px"/>
                    </div>
                    </div>
                    <div className="flexbox-item flexbox-item-2">
                    <h3 className="bio-name">{this.state.currentStylist.name}</h3>
                    <h2>{this.state.currentStylist.specialty}</h2><br></br><br/><br></br><br/>
                    <h2>{this.state.currentStylist.bio}</h2><br></br><br/><br></br><br/><br></br><br/>
                    <Link to= {`/stylists/${this.state.currentStylist.id}/booking`}>
                    <button onClick ={() => this.props.history.push(`/stylists/${this.state.currentStylist.id}`)}>Book {this.state.currentStylist.name}</button></Link>
                    <button>Enter Chat Room</button>
                    </div>
                    {/* <div class="flexbox-item flexbox-item-3"></div> */}
                    <div className="axis main-axis"></div>
                    <div className="axis cross-axis"></div>
                    </div>
                </div>
        )
    }
}

export default withRouter(SingleStylist)
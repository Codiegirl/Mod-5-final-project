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
                    {/* <div class="flexbox-item flexbox-item-3"></div> */}
                    {/* <div className="axis main-axis"></div>
                    <div className="axis cross-axis"></div> */}
                </div>
                
                {/* <div className ="flexbox-container-1">
                    <div className="flexbox-item-intro-1">
                        <img src={doublegirl} style={{width: 450, height: 500}}></img>
                    </div>

                    <div className="flexbox-item-intro-2">
                        <img src={doublegirl} style={{width: 450, height: 500}}></img>
                    </div> */}
              {/* </div> */}
            </div>
        )
    }
}

export default withRouter(SingleStylist)
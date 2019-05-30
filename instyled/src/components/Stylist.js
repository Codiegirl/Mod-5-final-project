import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


class Stylist extends React.Component {

    state = {
        currentStylist: [],
        showBio: false
    }

    // componentDidMount (){
        
    // }

    toggleBio() {
        console.log("bio");
        this.showBio = !this.showBio;
    }

    render(){
        console.log(this.props)
        
        
        return (
            
            <div className="main">
                
                <div className ="flexbox-container">
                    <div className="flexbox-item flexbox-item-1">
                    <div className="rounded">
                    <img className="rounded img" src={this.props.photo}width ="500px" onClick={this.toggleBio} height ="400px"/>
                    </div>
                    </div>
                    <div className="flexbox-item flexbox-item-2">
                    {/* {this.state.showBio ? ( */}
                    {/* <div> */}
                    <h3 className="bio-name">{this.props.name}</h3>
                    <h2>{this.props.specialty}</h2><br></br><br/><br></br><br/>
                    <h2>{this.props.bio}</h2><br/>
                    <Link to= {`/stylists/${this.props.id}/booking`}>
                    <button className="book-button" onClick ={() => this.props.history.push(`/stylists/${this.props.id}/booking`)}>Book {this.props.name}</button></Link>
                    {/* <button>Enter Chat Room</button> */}
                    {/* </div>) :''} */}
                    </div>
                    {/* <div class="flexbox-item flexbox-item-3"></div> */}
                    <div className="axis main-axis"></div>
                    <div className="axis cross-axis"></div>
                    </div>
                </div>
        )
    }
}

export default withRouter(Stylist)
                /* <div>
                    <div className="stylist-list"></div>
                    <img src={this.props.photo}width ="300px" height ="300px"/>
                    </div>
                    <h3>Name: {this.props.name}</h3> 
                    <h2>{this.props.specialty}</h2>
                    <h2>Bio: {this.props.bio}</h2>
                    <div className="profile-images" >
                    <img height="400" src={this.props.images[0].image}/>
                    <img height="400" src={this.props.images[1].image}/>
                    <img height="400" src={this.props.images[2].image}/><br/>
                    <button>Book</button>
                    <button>Enter Chat Room</button>
                </div>
            </div>
        </div>
        )
    }
} */

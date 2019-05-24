import React from 'react'
import { Link } from 'react-router-dom'


export default class Stylist extends React.Component {

    // state = {
    //     currentStylist: []
    // }

    // componentDidMount (){
        
    // }

    render(){
        console.log(this.props)
        
        
        return (
            
            <div>
                <div className ="flexbox-container">
                    <div className="flexbox-item flexbox-item-1">
                    <div className="rounded">
                    <img className="rounded img" src={this.props.photo}width ="700px" height ="600px"/>
                    </div>
                    </div>
                    <div className="flexbox-item flexbox-item-2">
                    <h3 className="bio-name">{this.props.name}</h3>
                    <h2>{this.props.specialty}</h2><br></br><br/><br></br><br/>
                    <h2>{this.props.bio}</h2><br></br><br/><br></br><br/><br></br><br/>
                    <Link to= {`/stylists/${this.props.id}/booking`}>book stuff</Link>
                    <button onClick ={() => this.props.history.replace(`/stylists/${this.props.id}/booking`)}>Book</button>
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


                {/* <div>
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
} */}
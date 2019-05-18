import React from 'react'


export default class CreateProfileCard extends React.Component {
    render(){
        return (
            
            <div>
                
                <img width="100" src={this.props.photo}/><br/>
                <h3>Name: {this.props.name}</h3> 
                <h2>{this.props.specialty}</h2>
                <h2>Bio: {this.props.bio}</h2>
                <div className="profile-images" >
                <img height="400" src={this.props.image1}/>
                <img height="400" src={this.props.image2}/>
                <img height="400" src={this.props.image3}/>
                </div>

            </div>
        )
    }
}
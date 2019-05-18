import React from 'react'


export default class PhotoCard extends React.Component {
    render(){
        return (
            <div className="profile-images" >
                <ul>
                <img width="300" height="400" src={this.props.image1}/>
                </ul>
            </div>
        )
    }
}
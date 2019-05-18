import React from 'react'
import CreateProfileCard from '../components/CreateProfileCard'


export default class ProfileContainer extends React.Component {
    render(){
        return (
            <div>
                <h1>Meet the Stylists</h1>
            {this.props.allStylists.map(stylist => (
                <CreateProfileCard
                {...stylist}/>
            
            ))}
            </div>
        )
             
        
    }
}
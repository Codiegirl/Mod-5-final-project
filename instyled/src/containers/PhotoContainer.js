import React from 'react'
import PhotoCard from './PhotoCard'

export default class PhotoContainer extends React.Component {
    render(){
        return (
            this.props.allStylists.map( stylist => (
            <PhotoCard 
                {...stylist.image}/>
            )) 

        )
    }
}
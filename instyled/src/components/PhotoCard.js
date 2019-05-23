import React from 'react'


export default class PhotoCard extends React.Component {


    render(){
        return (
            <div className="profile-images" >
                
                    
                <img height="400" src={this.props.image1}/>
                <button>shop</button>
                <button Link to>Meet the Stylist</button>
                    
                {/* <img width="300" height="400" src={this.props.image2}/>
                <img width="300" height="400" src={this.props.image3}/> */}
                
            </div>
        )
    }
}
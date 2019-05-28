import React from 'react'
import { Link } from 'react-router-dom'


export default class PhotoCard extends React.Component {

    

    render(){
 
        return (
                
                <div class ="">
                    <div class ="card"> 
                        <img src={this.props.image} style ={{"width": "100%"}}/>
                    
                {/* <div class ="container">
                    <button onClick={this.showComments}>Comments</button>
                { this.state.visible ?
                <ul> 
                    <li>{this.props.comment1</li>
                    <li>{this.props.comment1</li>
                    <li>{this.props.comment1</li>
                    <li>Comment:</li>
                <ul/> : null } */}
                
                <button onClick= {() => this.props.clickImage(this.props.id)}>comment</button>

                <Link to= {`/stylists/${this.props.id}`}>
                <button>Meet the Stylist</button></Link>
                
                {/* <img width="300" height="400" src={this.props.image2}/>
                <img width="300" height="400" src={this.props.image3}/> */}
                    {/* </div>  */}
                </div> 
            </div>
        )
        
    }
    
}
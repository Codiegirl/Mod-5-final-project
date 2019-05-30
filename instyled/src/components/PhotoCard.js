import React from 'react'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm';


export default class PhotoCard extends React.Component {
    

    render(){
        return (
                
                <div class ="card-outer">
                    <div class ="card"> 
                        <img src={this.props.image} style ={{"width": "100%"}}/>
                        
                    
                {/* <div class ="container">
                    <button onClick={this.showComments}>Comments</button>
                { this.state.visible ?
                <ul> 
                    <li>{this.props.comment1</li>
                    <li>{this.props.comment1</li>
                    <li>{this.props.comment1</li
                    <li>Comment:</li>
                <ul/> : null } */}
                
                <button className="comment-button" onClick= {() => this.props.clickImage(this.props.id)}>comment</button><br/>

                    <Link to= {`/stylists/${this.props.stylistID}`}>
                <button className="comment-button">Meet the Stylist</button></Link>
                
                {/* <img width="300" height="400" src={this.props.image2}/>
                <img width="300" height="400" src={this.props.image3}/> */}
                    {/* </div>  */}
                    {this.props.commentMode ? (<div>
                        <CommentForm
                            id={this.props.id}
                            selectedComments={this.props.selectedComments}
                            handleCreateComment={this.props.handleCreateComment}
                            handleChange={this.props.handleChange}/>
                    </div>) : null}
                </div> 
            </div>
        )
        
    }
    
}
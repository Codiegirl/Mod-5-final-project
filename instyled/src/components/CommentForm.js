import React from "react";

export default class CommentForm extends React.Component {
    render(){
        return (
            <div style={{ width: '100%', float:'left'}}>
                
                <div className="boxed">
                
                {this.props.selectedComments.map(comment => (
                    <div>
                        <ul>
                            <li className="list">{comment.message}</li>
                        </ul>
                    </div>
                ))}
                <form onSubmit={this.props.handleCreateComment} className="comment-form" >
                    <input onChange={this.props.handleChange} type="text" placeholder="Enter comment" name="message" required/>
                    <button type="submit">comment</button>
                </form>
                </div>
            </div>
        )
    }
}
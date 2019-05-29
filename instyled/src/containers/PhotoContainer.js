import React from 'react'
import PhotoCard from '../components/PhotoCard'
import { io } from '../socket'
import {Grid, Segment, Popup} from 'semantic-ui-react'



export default class PhotoContainer extends React.Component {


    state = {
       stylists: [],
        comments:[],
        image: null,
        users: [],
      }

      clickImage = (id) => {
        // console.log('here', id)
        this.setState({
          image_id: id
        })
      }
    
      componentDidMount(){
        io.emit('stylists.index', stylists => {
          // console.log('l', stylists)
            this.setState({ stylists })
        })
        io.on('stylists.update', stylists => {//start listineing for when stylists are updated
            this.setState({ stylists }) //put them in state, then on the backend 
        })
  
        io.emit('comments.index', comments => {
            this.setState({ comments })
        })
        io.on('comments.update', comment => {//start listineing for when stylists are updated
          this.setState({
            comments: [...this.state.comments, comment]
          })
          //console.log(e.payload)
        })
    
      } 
    
      saveStylist(stylist){
        io.emit('stylist.update', stylist)
      }

      saveComment(comment){
        io.emit('comment.update', comment)
      }

      checkAuth = () => {
        if(localStorage.getItem('token') !== null){
          fetch('http://localhost:3000/stylists', {
            headers:{
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((res) => res.json())
          .then((users) => this.setState({
            users: users,
            
          }))
        }
      }
      
      handleCreateComment = (e) =>{
        console.log(e.target)
          e.preventDefault()
          let image_id = this.state.image_id
        let message =  e.target.message.value
          e.target.message.value = ''
        //  console.log("hey")
        fetch('http://localhost:3000/comments',{
              method: 'POST',//create
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                image_id: image_id,
                message: message
              })
        })
        .then(res=> res.json())
        // .then(comment => {
        //   this.setState({
        //     comments: [...this.state.comments, comment]
        //   })
        //   //console.log("hey123")
            
        // })
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.message]: e.target.value
        
        })
      }
      



    render(){
      let selectedComments = this.state.comments.filter( comment => comment.imageId == this.state.image_id)
      console.log(this.state.stylists)
      //console.log(this.state.image_id, selectedComments)
      return (
          <div style={{ marginTop: '80px'}}>
            <div style={{ width: '80%', float:'left', columnCount: 3}}>
                {/* <h1></h1> */}
                <div>
                  {this.state.stylists.map( stylist => (
                    stylist.images.map(image => (
                      <PhotoCard
                      image={image.image}
                      id={stylist.id}
                      id={image.id}
                      clickImage={this.clickImage}/>
                      
                    ))
                  
                  ))} 
              </div>
            </div>

            <div style={{ width: '15%', float:'left'}}>
              
              <div className="boxed">
                
                {selectedComments.map(comment => (
                  <div>
                    <ul>
                      <li className="list">{comment.message}</li>
                    </ul>
                  </div>
                ))}
                <form onSubmit={this.handleCreateComment} className="comment-form" >
                  <input onChange={this.handleChange} type="text" placeholder="Enter comment" name="message" required/>
                  <button type="submit">comment</button>
                </form>
              </div>
            </div>
            
            </div>
        )
        
    }
}



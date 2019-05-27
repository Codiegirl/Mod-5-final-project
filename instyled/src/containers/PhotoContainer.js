import React from 'react'
import PhotoCard from '../components/PhotoCard'
import { io } from '../socket'



export default class PhotoContainer extends React.Component {


    state = {
       stylists: [],
        comments:[],
        image: null,
        users: [],
      }

      clickImage = (id) => {
        console.log('here', id)
        this.setState({
          image_id: id
        })
      }
    
      componentDidMount(){
        io.emit('stylists.index', stylists => {
          console.log('l', stylists)
            this.setState({ stylists })
        })
        io.on('stylists.update', stylists => {//start listineing for when stylists are updated
            this.setState({ stylists }) //put them in state, then on the backend 
        })
  
        io.emit('comments.index', comments => {
          
            this.setState({ comments })
        })
        io.on('comments.update', comments => {//start listineing for when stylists are updated
            this.setState({ comments }) //put them in state, then on the backend 
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
      
      



    render(){
      let selectedComments = this.state.comments.filter( comment => comment.imageId == this.state.image_id)
      console.log(this.state.image_id, selectedComments)
      return (
          
            <div>
                {/* <h1></h1> */}
                {this.state.stylists.map( stylist => (
                  stylist.images.map(image => (
                    <PhotoCard
                    image={image.image}
                    id={stylist.id}
                    id={image.id}
                    clickImage={this.clickImage}/>
                    
                  ))
                
            ))} 
            
            <div className="comment-box">
              {selectedComments.map(comment => (
                <ul>
                  <li>{comment.message}</li>
                </ul>
              ))}
            </div>
       

            </div>
        )
    }
}


/* <div>
{selectedComments.map(comment => (
  <ul>
    <li>{comment.message}</li>
  </ul>
))}
</div> */
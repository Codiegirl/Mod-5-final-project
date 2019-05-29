import React from 'react'
import Stylist from '../components/Stylist'
import { io } from '../socket'


export default class ProfileContainer extends React.Component {

    state = {
        stylists: [],
        users: []
      }
      
      clickStylist = (id) => {
          //console.log("hi")
          this.setState({
              stylists: this.state.stylists.map(stylist => {
                  if(stylist.id === id)
                  return{...stylist}
                }
            )
          })
        }
      
    
      componentDidMount(){
        io.emit('stylists.index', stylists => {
            this.setState({ stylists })
        })
        io.on('stylists.update', stylists => {//start listineing for when stylists are updated
            this.setState({ stylists }) //put them in state, then on the backend 
        })
    
      } 
    
      saveStylist(stylist){
        io.emit('stylist.update', stylist)
      }

    render(){
        
        return (
            <div>
                
            {this.state.stylists.map((stylist,k) => (
                <Stylist key={k}
                {...stylist}
                clickStylist={this.clickStylist}/>
                    
            ))}
            </div>
        )
             
        
    }
}
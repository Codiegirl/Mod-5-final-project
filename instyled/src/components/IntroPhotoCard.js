import React from 'react'
import intro from '../assets/images/introgirl.jpg'
import justin from '../assets/images/Justin intro.png'
import beauty from '../assets/images/asianbeauty.jpg'
import yoshi from '../assets/images/Yoshevah intro.png'
import man from '../assets/images/man2 intro.jpg'

export default class IntroPhotoCard extends React.Component {
    render(){
    return (
      <div>
         <img src={intro} style={{width: 450, height: 500}}></img>
         <img src={justin} style={{width: 450, height: 500}}></img>
         <img src={beauty} style={{width: 450, height: 500}}></img>
         <img src={yoshi} style={{width: 450, height: 500}}></img>
         <img src={man} style={{width: 450, height: 500}}></img>
         <h1 center>Your Final Destination for Style</h1>
      </div>
      );
   }
}
  

import React from 'react'
import intro from '../assets/images/introgirl.jpg'
import justin from '../assets/images/Justin intro.png'
import beauty from '../assets/images/asianbeauty.jpg'
import yoshi from '../assets/images/Yoshi.png'
import man from '../assets/images/Manintro.jpg'
import doublegirl from '../assets/images/doublegirl.png'
import greenskirt from '../assets/images/greenskirt2.png'
import pinkdress from '../assets/images/pinkdress1.png'
import bottom from '..//assets/images/bottomphoto.png'



export default class IntroPhotoCard extends React.Component {
    render(){
    return (
      
        <div className="main">
          <div id="intro-content" className="intro-container">

             <img src={intro} style={{width: 450, height: 500}}></img>
             <img src={justin} style={{width: 450, height: 500}}></img>
             <img src={beauty} style={{width: 450, height: 500}}></img>
             <img src={yoshi} style={{width: 450, height: 500}}></img>
             <img src={man} style={{width: 450, height: 500}}></img><br/><br/><br/><br/>
            
           </div> 
           <h1 center>Your Final Destination for Style</h1><br/><br/><br/><br/>
           <h1 center></h1>
           <div className ="flexbox-container-1">
                  <div className="flexbox-item-intro-1">
                      <img src={doublegirl} style={{width: 450, height: 500}}></img>
                  </div>

                  <div className="flexbox-item-intro-2">
                      <img src={doublegirl} style={{width: 450, height: 500}}></img>
                      
                      <h1><center>The Latest Styles To Celebrate!</center></h1>
                  </div>
                  
                  <div className="flexbox-item-intro-3">
                    <img src={doublegirl} style={{width: 450, height: 500}}></img>
                  </div>
                    
                </div>

                <div>
                <div className="flexbox-item-intro-1">
                      <img src={pinkdress} style={{width: 450, height: 500}}></img>
                  </div>
                  <div className="flexbox-item-intro-3">
                    <img src={greenskirt} style={{width: 450, height: 500}}></img>
                  </div>
                </div>
                <div>
                
                </div>
                  
       </div>


       );
    }
 } 



 

import React from 'react'
import intro from '../assets/images/introgirl.jpg'
import justin from '../assets/images/Justin intro.png'
import beauty from '../assets/images/asianbeauty.jpg'
import yoshi from '../assets/images/Yoshi.png'
import man from '../assets/images/Manintro.jpg'
import doublegirl from '../assets/images/doublegirl.png'
import greenskirt from '../assets/images/greenskirt.png'


var i = 0;
var images = [];
var time = 3000

// function changeImg(){
//    document.slide.src = images[i]

//    if(i < images.length - 1){
//       i++;
//    }else{
//       i = 0;
//    }
//    setTimeout("changeImg()", time);
//    }

//    window.onload = changeImg;


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
          <div className ="flexbox-container">
                    <div className="flexbox-item flexbox-item-1">
                    <img src={doublegirl} style={{width: 500, height: 500}}></img>
                     <h1><center>Evening wear</center></h1>
                     <h2><center>The latest styles to celebrate</center></h2>
                  </div>
                  <div className="flexbox-item flexbox-item-2">
                    <img src={doublegirl} style={{width: 500, height: 500}}></img>
                     
                  </div>
                  <div>
                  <div className="flexbox-item flexbox-item-3">
                    <img src={greenskirt} style={{width: 500, height: 500}}></img>
                    </div>
                    </div>
                     

                  </div>
                  
      </div>


      );
   }
} 



 

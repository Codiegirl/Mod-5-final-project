import React from 'react'


export default class PhotoCard extends React.Component {


    render(){
 
        return (
                
                <div class ="wrap">
                    <div class ="card"> 
                        <img src={this.props.image} style ={{"width": "100%"}}/>
                    
                <div class ="container">
                <h4><b> Rochell </b></h4>
                <p> Footballer</p>
                <p> Argentina</p>
                </div> 
                <button>shop</button>
                <button Link to>Meet the Stylist</button>
                
                {/* <img width="300" height="400" src={this.props.image2}/>
                <img width="300" height="400" src={this.props.image3}/> */}
                
                </div> 
            </div>
        )
        
    }
    
}
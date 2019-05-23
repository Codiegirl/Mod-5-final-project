import React from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar-container">
                
                <div className="navbar-links">
                    <Link to= "/photos"className="navbar-links"><li>looks</li></Link>
                    <Link to= "/home-page"className="navbar-links"><h1>INSTYLED</h1></Link>
                    <Link to= "/stylists"className="navbar-links"><li>Stylists</li></Link>
                    <Link to= "/home-page"className="navbar-links"><li>Bookings</li></Link>
                    </div>
                    
            </div>
            
            
        )
    }
}
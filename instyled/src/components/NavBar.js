import React from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends React.Component{
    handleLogout = () => {
        localStorage.clear()
    }

    render(){
        return(
            <div className="navbar-container">
                
                <div className="navbar-links">
                    <Link to= "/home-page"className="app-name"><h1>INSTYLED</h1></Link>
                    <Link to= "/photos"className="navbar-links"><li>Looks</li></Link>
                    <Link to= "/stylists"className="navbar-links"><li>Stylists</li></Link>
                    <Link to= "/home-page"className="navbar-links"><li>Bookings</li></Link>
                    <Link to= "/login" onClick={this.handleLogout}><li className="navbar-links" style={{decoration: 'none'}}>Logout</li></Link>
                    </div>
                    
            </div>
            
            
        )
    }
}
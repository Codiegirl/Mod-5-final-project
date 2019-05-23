import React from 'react'
import { Link } from 'react-router-dom'
import { authenticateSocket } from '../socket';


export default class LoginCard extends React.Component {
    state = {
        username: '',
        password: '',
        image: ''
      }
    
      handleLoginSubmit = (e) =>{
        e.preventDefault()
        console.log('hi')
       let username =  e.target.username.value
       let password = e.target.password.value
       
       fetch('http://localhost:3000/login',{
            method: 'POST',//create
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            })
       })
       .then(res=> res.json())
       .then(user => {
          localStorage.setItem('token', user.token)
          authenticateSocket()
        })
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.username]: e.target.value
        })
      }
      
    render(){
        return (
        <div className="login-form-container">
            <h1>Login</h1>
            <form onSubmit={this.handleLoginSubmit}>
                <div class="login-form">
                    <label for="username"><b>Username</b></label><br/>
                    <input onChange={this.handleChange} type="text" placeholder="Enter Username" name="username" required/>
                    <br/>
                    <br/>
                    <label for="password"><b>Password</b></label><br/>
                    <input onChange={this.handleChange} type="password" placeholder="Enter Password" name="password" required/>
                    <br/>
                    <br/>
                    
                    <Link to="/home-page"><button  type="submit">Login</button></Link>
                    <br/>
                    
                    <h4>No Account Yet?</h4>
                    <Link to="/new">
                    <button button className="tiny ui inverted red basic button" type="submit">Create New Account</button>
                    </Link>
                </div>
        </form>
      </div>
        )
        
        
    }
}
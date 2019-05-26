import React from 'react'
import { Link } from 'react-router-dom'
import { authenticateSocket } from '../socket';


export default class NewUser extends React.Component {
    
        state = {
            username: '',
            password: '',
            image: ''
          }
        
          handleCreateSubmit = (e) =>{
            e.preventDefault()
            
           let username =  e.target.username.value
           let password = e.target.password.value

           console.log("hey dumbass")
           fetch('http://localhost:3000/new',{
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
            console.log("hey dumbass")
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
            <h1>Create a Profile</h1>
            <form onSubmit={this.handleCreateSubmit} class="login-form">
               
                    <label for="username"><b>Enter Username</b></label><br/>
                    <input onChange={this.handleChange} type="text" placeholder="Enter Username" name="username" required/>
                    <br/>
                    <br/>
                    <label for="password"><b>Enter Password</b></label><br/>
                    <input onChange={this.handleChange} type="password" placeholder="Enter Password" name="password" required/>
                    <br/>
                    <br/>
                    
                    <button  type="submit">Create Profile</button>
                    <br/>
                    
                    
               
        </form>
      </div>
        )
        
        
    }
}
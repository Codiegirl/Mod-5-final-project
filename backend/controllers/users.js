const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    sockets: socket => {
        
            // //console.log(socket)
            // socket.on('users.index', respond => {//event type and a function
            //     User.findAll()//returns a promise
            //     .then( users => {//
            //         respond(users)
            //     })
            
            // })
        
            socket.on('users.update', async params => {//patch request
                let user = await User.findByPK(params.id)
                await user.update(params)//wait for the dragon to be updated
                let users = await User.findAll()//get all the dragons whenever one changes
                io.emit('users.update', users) //broadcast that the stylist has changed and send them all back to the client
                
            })
    },
    http: app => {
        //index
    //     app.get('/users', (req,res) => { //like event listener --run this code 
    //         User.findAll()
    //             .then( user => {
    //                 res.json(user)
    //             })
    //     })
    //     //to show a user
    //     app.get('/users/:id', (req,res) => { //like event listener --run this code 
    //         User.findByPK(req.params.id)//returns a promise
    //             .then( users => {//call then on the promise to get back the stylista
    //                 res.json(users)
    //             })
    //     })
        //create jwt token with a post 
        app.post('/login', async(req, res)=> {
            //console.log(req.body.username, req.body.password)

            let users = await User.findAll({
                where: {
                    username: req.body.username
                }
            })
            let user = users[0]
            console.log(user)
            if(user.authenticate(req.body.password)) {
                res.json(user)
            }
        })
        //new
        app.post("/new", async (req, res) => {
            //console.log("hey dumbass")
            bcrypt.hash(req.body.password, 10, (err,hash) =>{
                User.create({
                    username: req.body.username,
                    password_digest: hash
                })
            })
            console.log("we in this bitch")
            res.json({user: user.token})
        })
        //edit
        app.get("/users/:id", (req, res) => {
            User.findByPk(req.params.id).then(user =>{
                res.json(user);
            })
        })
        
        //to update a stylist
        app.patch('/users/:id', async (req, res) => {
            let user = await User.findByPk(req.params.id);
            user.update(req.body);
            
        })
    }
}
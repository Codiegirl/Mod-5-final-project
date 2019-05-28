const Comment = require("../models/Comment");

module.exports = {
    sockets: socket => {
        
            //console.log(socket)
            socket.on('comments.index', respond => {//event type and a function
                Comment.findAll()//returns a promise
                .then( comments => {//
                    respond(comments)
                })
            
            })
        
            socket.on('comments.update', async params => {//patch request
                let comment = await Comment.findByPK(params.id)
                await comment.update(params)//wait for the dragon to be updated
                let comments = await Comment.findAll()//get all the dragons whenever one changes
                io.emit('comments.update', comments) //broadcast that the stylist has changed and send them all back to the client
                
            })
    },
    http: (app, io) => {
        app.get('/comments', (req,res) => { //like event listener --run this code 
            Comments.findAll()
                .then( comment => {
                    res.json(comment)
                })
        })

        app.post("/comments", async (req, res) => {
            console.log("hey dumbass")
            
                Comment.create({//returns a promise
                    message: req.body.message,
                    imageId: req.body.image_id
                })
                .then(comment=> {
                    io.emit("comments.update", comment)
                    res.json(comment)
                })//res sendes a response to the app.post
                
        })

            //console.log("we in this bitch")
            // res.json({})
        
        
        //to show a image
        app.get('/comments/:id', (req,res) => { //like event listener --run this code 
            Comment.findByPK(req.params.id)//returns a promise
                .then( comments => {//call then on the promise to get back the stylista
                    res.json(comments)
                })
        })
        
        //to update an image
        app.patch('/comments/:id', async (req, res) => {
            
        })
    }
}
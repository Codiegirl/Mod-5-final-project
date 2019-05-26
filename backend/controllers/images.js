const Image = require("../models/Image");

module.exports = {
    sockets: socket => {
        
            //console.log(socket)
            socket.on('images.index', respond => {//event type and a function
                Image.findAll()//returns a promise
                .then( images => {//
                    respond(images)
                })
            
            })
        
            socket.on('images.update', async params => {//patch request
                let image = await Image.findByPK(params.id)
                await image.update(params)//wait for the dragon to be updated
                let images = await Image.findAll()//get all the dragons whenever one changes
                io.emit('images.update', images) //broadcast that the stylist has changed and send them all back to the client
                
            })
    },
    http: app => {
        app.get('/images', (req,res) => { //like event listener --run this code 
            Images.findAll()
                .then( image => {
                    res.json(image)
                })
        })
        //to show a image
        app.get('/images/:id', (req,res) => { //like event listener --run this code 
            Image.findByPK(req.params.id)//returns a promise
                .then( images => {//call then on the promise to get back the stylista
                    res.json(images)
                })
        })
        
        //to update an image
        app.patch('/images/:id', async (req, res) => {
            
        })
    }
}
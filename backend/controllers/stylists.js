const Stylist = require("../models/Stylist");

module.exports = {
    sockets: socket => {
        
            //console.log(socket)
            socket.on('stylists.index', respond => {//event type and a function
                Stylist.findAll()//returns a promise
                .then( stylists => {//
                    respond(stylists)
                })
            
            })
        
            socket.on('stylists.update', async params => {//patch request
                let stylist = await Stylist.findByPK(params.id)
                await stylist.update(params)//wait for the dragon to be updated
                let dragons = await Dragon.findAll()//get all the dragons whenever one changes
                io.emit('stylists.update', stylists) //broadcast that the stylist has changed and send them all back to the client
                
            })
    },
    http: app => {
        app.get('/stylists', (req,res) => { //like event listener --run this code 
            Stylist.findAll()
                .then( stylist => {
                    res.json(stylist)
                })
        })
        //to show a dragon
        app.get('/stylists/:id', (req,res) => { //like event listener --run this code 
            Stylist.findByPK(req.params.id)//returns a promise
                .then( stylists => {//call then on the promise to get back the stylista
                    res.json(stylists)
                })
        })
        
        //to update a stylist
        app.patch('/dragons/:id', async (req, res) => {
            
        })
    }
}
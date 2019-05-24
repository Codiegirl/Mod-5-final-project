const Stylist = require("../models/Stylist");
const Image = require("../models/Image")

module.exports = {
    sockets: socket => {
        
            //console.log(socket)
            socket.on('stylists.index', respond => {//event type and a function
                
                Stylist.findAll({
                    include: [{
                        model: Image
                    }]
                })//returns a promise
                .then( stylists => {//
                    respond(stylists)
                })
            
            })
        
            socket.on('stylists.update', async params => {//patch request
                let stylist = await Stylist.findByPk(params.id)
                await stylist.update(params)//wait for the dragon to be updated
                let stylists = await Stylist.findAll()//get all the dragons whenever one changes
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
        //to show a stylist
        app.get('/stylists/:id', (req,res) => { //like event listener --run this code 
            Stylist.findByPk(req.params.id)//returns a promise
                .then( stylists => {//call then on the promise to get back the stylista
                    res.json(stylists)
                })
        })
        
        //to update a stylist
        app.patch('/stylists/:id', async (req, res) => {
            
        })
    }
}
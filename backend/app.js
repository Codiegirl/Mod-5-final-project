const pry = require('pryjs')
const userController = require('./controllers/users')
const imageController = require('./controllers/images')
const stylistController = require('./controllers/stylists')
const io = require('socket.io')()//function that has to be invoked



io.on('connection', socket => { 

    stylistController.sockets(socket);
    //userController.sockets(socket);
    imageController.sockets(socket);


})
        
//     socket.on('echo', payload => {//replace fetches with socket connections
//         socket.emit('message', payload)
//     })
// })


io.listen(8080)






const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(cors())
app.use(bodyParser.json())
stylistController.http(app);



app.listen(3000)//tells it to listen for requests
//eval(pry.it)

// sequelize 
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
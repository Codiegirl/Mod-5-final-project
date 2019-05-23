const pry = require('pryjs')
const userController = require('./controllers/users')
const imageController = require('./controllers/images')
const stylistController = require('./controllers/stylists')
const jwt = require('jsonwebtoken')
const socketIo = require('socket.io')//function that has to be invoked

const io = socketIo(8080, {
    handlePreflightRequest: function (req, res) {
      var headers = {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Access-Control-Allow-Credentials': true
      };
      res.writeHead(200, headers);
      res.end();
    }
  })


io.on('connection', socket => { 
    if(socket.handshake.headers.authorization){
        let [ type, token ] = socket.handshake.headers.authorization.split(' ')
        let result = jwt.decode(token)
        if(result){
            let userId = result.id
            // Things only logged in users can do
        }
        

    } 
    stylistController.sockets(socket);
    imageController.sockets(socket);

})
        
//     socket.on('echo', payload => {//replace fetches with socket connections
//         socket.emit('message', payload)
//     })
// })


// io.listen(8080)






const express = require('express')
const User = require('./models/User')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()

app.use(cors())
app.use(bodyParser.json())
stylistController.http(app);
userController.http(app);



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
import socketIO from 'socket.io-client'
let io = socketIO('localhost:8080')

let authenticateSocket = () => {
    io = socketIO('localhost:8080', {
        transportOptions: {
        polling: {
        extraHeaders:{
            authorization: `Bearer ${localStorage.getItem('token')}`
            }//connects to the handshake in app.js
        }
    }
    })
}

if(localStorage.getItem('token')) authenticateSocket()

export {
    io, authenticateSocket
}

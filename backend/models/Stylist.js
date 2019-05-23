const Sequelize = require('sequelize');
const { STRING, BOOLEAN } = Sequelize //define the static properties
                    //const STRING = sequelize.STRING


const sequelize = require('./sequelize')

const Stylist = sequelize.define('stylist', {
    photo: {
        type: STRING,
    },
    name: {
        type: STRING,
    },
    bio:{
        type: STRING
    },
    styling:{
        type: BOOLEAN
    },
    specialty:{
        type: BOOLEAN
    }
})


module.exports = Stylist

 //checks like db migrate

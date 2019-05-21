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
    image1: {
        type: STRING
    },
    image1: {
        type: STRING
    },
    image2: {
        type: STRING
    },
    image3: {
        type: STRING
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

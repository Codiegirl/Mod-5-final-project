const Sequelize = require('sequelize');

const { STRING, BOOLEAN } = Sequelize //define the static properties
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
                    //const STRING = sequelize.STRING
const sequelize = require('./sequelize')


class User extends Sequelize.Model {

    authenticate(rawPassword){
        return bcrypt.compareSync(rawPassword, this.password_digest)//comparison that returns true or false
    }
   
    // has_secure_password equivalent from rails:
    // Triggers with: user.password = '1234'
    // Saves password_digest
    set password(value){
        let salt = bcrypt.genSaltSync(10)//
        let hash =  bcrypt.hashSync(value, salt);//this is what is being saved into a hash
        this.password_digest = hash
    }

    get token(){
        return jwt.sign({ id: this.id }, 'sdfaliwe334')//creating the token. ud=ser gets token to remember their session
    }//this is passed in place of the real password

    toJSON(){
        let jsonObject= { ...this.dataValues, token: this.token }// this is the json object with the token
        delete jsonObject.password_digest//delete it so that it is not passed around
        return jsonObject//just the username and the token
    }

}

User.init({
    name: {
        type: STRING,
    },
    image: {
        type: STRING
    },
    username: {
        type: STRING,
    },
    password_digest: {//step one
        type: STRING
    }
}, { sequelize, modelName: 'user' } )



    
    



module.exports = User
sequelize.sync() //checks like db migrate

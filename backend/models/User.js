const Sequelize = require('sequelize');
const { STRING } = Sequelize //define the static properties
                    //const STRING = sequelize.STRING


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const User = sequelize.define('user', {
    name: {
        type: STRING,
    },
    image: {
        type: STRING
    },
    bio:{
        type: STRING
    }
    
})


module.exports = User
sequelize.sync() //checks like db migrate

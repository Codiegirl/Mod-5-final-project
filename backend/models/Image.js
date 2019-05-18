const Sequelize = require('sequelize');
const { STRING, BOOLEAN } = Sequelize //define the static properties
                    //const STRING = sequelize.STRING


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Image = sequelize.define('image', {
    
    image: {
        type: STRING
    },
    stylist_id:{
        type: BOOLEAN
    }
})


module.exports = Image
sequelize.sync() //checks like db migrate

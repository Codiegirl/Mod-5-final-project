const Sequelize = require('sequelize');
const { STRING, BOOLEAN } = Sequelize 
const User = require("./User")
const Image = require("./Image")


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});


const Comment = sequelize.define('comment', {
    
    message: {
        type: STRING
    },
    
    // stylist_id:{
    //     type: BOOLEAN
    // }
})
Comment.belongsTo(User)
Comment.belongsTo(Image)
Image.hasMany(Comment)


module.exports = Comment
sequelize.sync() //checks like db migrate


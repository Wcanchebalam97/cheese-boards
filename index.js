//connect to the database 
const {Sequelize}=require('sequelize');

const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: 'mydatabase.db'
})


//export our instance 
module.exports = sequelize;
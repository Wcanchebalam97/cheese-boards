const sequelize = require ('../index');

const{DataTypes} = require('sequelize');

//defining the model
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
})


//exporting the model
module.exports = User
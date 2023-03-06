const sequelize = require ('../index');

const{DataTypes} = require('sequelize');

//defining the model
const Board = sequelize.define('Board', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER
})


//export the model
module.exports = Board
const sequelize = require ('../index');

const{DataTypes} = require('sequelize');

//defining the model
const Cheese = sequelize.define('Cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
})


//exporting the model
module.exports = Cheese
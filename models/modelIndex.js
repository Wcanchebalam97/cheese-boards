const sequelize = require('sequelize');

//import models so that we can associate them in one file 
const User = require('./User');
const Board = require('./Board');
const Cheese = require('./Cheese');


//A user can have multiple boards (one to many)
User.hasMany(Board);
Board.belongsTo(User);

//Board can have many cheese and cheese can be in many board (many-to-many)
const ThroughTable = sequelize.define('ThroughTable', {});

Board.belongsToMany(Cheese, { through: ThroughTable});
Cheese.belongsToMany(Board, {through: ThroughTable});


//Sync the associations to the database 
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Unable to sync the database', err);
  });

  // I appreciate this comment! Consider reaching out to 
  // a peer or coach in the helpdesk, or during one 
  // of our office hours/squad time for more details on these topics.
  
  //I am not sure about Eager loading or testing in general I might have to make some extra time to get
  //some additional help with these concepts 
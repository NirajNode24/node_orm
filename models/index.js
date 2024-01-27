const { DataTypes } = require('sequelize');
const sequelize = require('../DB/dbconncet');

const db = {};

// db.Sequelize =Sequelize
db.sequelize = sequelize



db.Admin = require('./Admin_model')(sequelize, DataTypes)
db.Entite = require('./Entite_model')(sequelize, DataTypes)
db.User = require('./User_model')(sequelize, DataTypes)
db.From_data = require('./Form_Setting')(sequelize, DataTypes)




db.sequelize.sync({ alter: true });
console.log("All models were synchronized successfully.");
module.exports = db;
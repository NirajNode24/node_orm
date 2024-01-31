const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('ATBT_test', 'rootadmin', 'rootadmin', {
    host: 'atbt-db.cwuyjszxxfxc.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    logging: false
  });


  try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

module.exports = sequelize;
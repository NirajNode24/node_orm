const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('ATBT_test', 'postgres', 'rootadmin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  });


  try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

module.exports = sequelize;
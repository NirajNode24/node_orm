module.exports = (sequelize, DataTypes) => {
    const Form_Setting = sequelize.define('Form_Setting', {
      Data: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      // Other model options go here
    });
  
    return Form_Setting;
  }
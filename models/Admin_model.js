module.exports =(sequelize,DataTypes)=>{
    const AdminUser = sequelize.define('AdminUser', {
        // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING
          // allowNull defaults to true
        }
      }, {
        // Other model options go here
      });
return AdminUser;
}
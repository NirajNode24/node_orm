module.exports = (sequelize, DataTypes) => {

const Entity = sequelize.define('Entity', {
    EntityName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    MobileNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Switch: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    Time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Radio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Range: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AddMembers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    AddMultipleMembers: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  // Entite.associate = (models) => {
  //   Entite.belongsToMany(models.User, { through: 'UserEntite' });
  // };
  return Entity;
}
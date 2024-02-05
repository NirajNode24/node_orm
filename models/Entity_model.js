module.exports = (sequelize, DataTypes) => {

const Entity = sequelize.define('Entity', {
  Data: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: true
  }
  });
  // Entite.associate = (models) => {
  //   Entite.belongsToMany(models.User, { through: 'UserEntite' });
  // };
  return Entity;
}
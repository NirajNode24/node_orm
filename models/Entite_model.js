module.exports = (sequelize, DataTypes) => {
  const Entite = sequelize.define('Entite', {
    Entite_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING
    },
    Member: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    EntityPhoto: {
      type: DataTypes.BLOB('long'), // or use DataTypes.BLOB if you don't need a specific length
      allowNull: true
    }
  }, {
    // Other model options go here
  });
  Entite.associate = (models) => {
    Entite.belongsToMany(models.User, { through: 'UserEntite' });
  };
  return Entite;
};
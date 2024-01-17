module.exports =(sequelize,DataTypes)=>{
    const Entite = sequelize.define('Entite', {
        // Model attributes are defined here
        Entite_Name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        Description: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        Member: {
            type: DataTypes.STRING
            // allowNull defaults to true
          }
      }, {
        // Other model options go here
      });
return Entite;
}
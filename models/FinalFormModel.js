const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../DB/dbconncet');

const FinalForm = async (req, res) => {
    var data = [{
        name: "irshad", email: "irshad@gmail.com"
      }]
    const keys = Object.keys(data[0]);
    console.log("keys", keys);
    console.log(data) 
    res.status(201).json({ message: "Entity created successfully",data });

//   try {

//     var data = req.body.arrayOfObjects; 
//     const inputnames = data.map(item => item.inputname);
//     var Name = inputnames[0];
//     var Image = inputnames[1];
//     var Description = inputnames[2];
//     var Members = inputnames[3];
//     var MultiSelect = inputnames[4];
//     var Custom1 = inputnames[5];
//     var Custom2 = inputnames[6];
//     var Custom3 = inputnames[7];
//     var Custom4 = inputnames[8]
//     var Custom5 = inputnames[9]



//     console.log(inputnames)
//     const Entity = sequelize.define('Entity', {
//       [Name]: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       [Description]: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       [Members]: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       [Image]: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       [MultiSelect]:{
//         type: DataTypes.STRING
//       },
//       [Custom1]:{
//         type: DataTypes.STRING
//       },
//       [Custom2]:{
//         type: DataTypes.STRING
//       },
//       [Custom3]:{
//         type: DataTypes.STRING
//       },
//       [Custom4]:{
//         type: DataTypes.STRING
//       },
//       [Custom5]:{
//         type: DataTypes.STRING
//       }
//     });  

//     await Entity.sync({alter:true});
//     res.status(201).json({ message: "Entity created successfully" });
//   } catch (error) {
//     console.error("Error creating entity:", error);
//     res.status(500).json({ error: "Error" });
//   }
};

module.exports = { FinalForm };

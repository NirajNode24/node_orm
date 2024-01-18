var db = require('../models/index');
const Entite = db.Entite;


const Add_Entite = async (req, res) => {
    try {
      var data =(req.body)
      console.log(data)
      const admin = await Entite.create(data);
      res.status(201).json({ message: " created successfully", admin });
    } catch (error) {
      // Handle any errors that occur during the Admin creation process
      console.error("Error creating admin:", error);
      res.status(500).json({ error: "Error" });
    }
  };
  const List_Entite = async (req, res) => {
    try {
      // Create an Admin with the given data
      const admin = await Entite.findAll();
      res.status(200).json({admin });
    } catch (error) {
      // Handle any errors that occur during the Admin creation process
      console.error("Error creating admin:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const Get_Entite = async (req, res) => {
    try {
      // Create an Admin with the given data
      const admin = await Entite.findOne({ where: {
        id : req.params.id
      }});
      res.status(200).json({ message: `your id is:${req.params.id}`, admin });
    } catch (error) {
      // Handle any errors that occur during the Admin creation process
      console.error("Error creating admin:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const Update_Entite = async (req, res) => {
    try {
      var data =req.body;
       await Entite.update(data, {
        where: { id: req.params.id}
      });
      res.status(200).json({ message: 'updated successfully ${req.params.id}` });
    } catch (error) {
      // Handle any errors that occur during the Admin creation process
      console.error("Error creating admin:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  const Delete_Entite = async (req, res) => {
    try {
      await Entite.destroy({
        where: { id: req.params.id },
        // truncate: true
      });
  
      res.status(200).json({ message: `deleted successfully ${req.params.id}` });
    } catch (error) {
      console.error("Error deleting admin:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
    
  module.exports = { Add_Entite,List_Entite,Update_Entite,Delete_Entite,Get_Entite }
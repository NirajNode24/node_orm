var db = require('../models/index');
const Entity = db.Entite;

// const Add_Entite = async (req, res) => {
//     try {
//       data =(req.body)
//       const Entites = await Entite.create(data);
//       res.status(201).json({ message: " created successfully", });
//     } catch (error) {
//       // Handle any errors that occur during the Admin creation process
//       console.error("Error creating admin:", error);
//       res.status(500).json({ error: "Error" });
//     }
//   };
//   const List_Entite = async (req, res) => {
//     try {
//       // Create an Admin with the given data
//       const Entites = await Entite.findAll();
//       res.status(200).json({Entites });
//     } catch (error) {
//       // Handle any errors that occur during the Admin creation process
//       console.error("Error creating admin:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

//   const Get_Entite = async (req, res) => {
//     try {
//       // Create an Admin with the given data
//       const Entites = await Entite.findOne({ where: {
//         id : req.params.id
//       }});
//       res.status(200).json({ message: `your id is:${req.params.id}`,Entites });
//     } catch (error) {
//       // Handle any errors that occur during the Admin creation process
//       console.error("Error creating :", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };

//   const Update_Entite = async (req, res) => {
//     try {
//       var data =req.body;
//        await Entite.update(data, {
//         where: { id: req.params.id}
//       });
//       res.status(200).json({ message: `updated successfully ${req.params.id}` });
//     } catch (error) {
//       // Handle any errors that occur during the Admin creation process
//       console.error("Error creating admin:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
//   const Delete_Entite = async (req, res) => {
//     try {
//       await Entite.destroy({
//         where: { id: req.params.id },
//         // truncate: true
//       });
  
//       res.status(200).json({ message: `deleted successfully ${req.params.id}` });
//     } catch (error) {
//       console.error("Error deleting:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   };
    
//   module.exports = { Add_Entite,List_Entite,Update_Entite,Delete_Entite,Get_Entite }


  const Add_data= async (req, res) => {
    try {
      const arrayOfObjects = req.body.arrayOfObjects;
      const name = req.body.Name
      
      if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) {
        return res.status(400).json({ error: 'Invalid array of objects' });
      }
      const serializedData = JSON.stringify(arrayOfObjects);
      const data = await Entity.create({ Data: serializedData, Name: req.body.Name });
      res.json({ message: 'Array of objects saved successfully.', data });
    } catch (error) {
      console.error('Error saving array of objects:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };   
  // const GetAllLIST = async (req, res) => {
  //   console.log(req.quarry.name)
  //   try {
  //     const allData = await Settings.findAll({
  //       where: {
  //         name: req.quarry.name
  //       },
  //       // attributes: ['data', 'name'] 
  //     });
  //     res.json({ message: 'Array of list is',  allData });
  
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send('Internal Server Error');
  //   }
  // };
  
  const GetAllLIST = async (req, res) => {
    try {
      const form = await Entity.findOne({ where: {
        name : req.query.name
      }});
      const data =form.Data
      const array = JSON.parse(data);
      // const trimmedJsonArray = array.map(obj => JSON.stringify(obj)).join(',');
      res.status(200).json({ message: `your name is:${req.query.name}`,array});
    } catch (error) {
      console.error("Error creating :", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  
  };
  
  // Update/create
  // const Update_data = async (req, res) => {
  //   try {
  //     const arrayOfObjects = req.body.arrayOfObjects;
  //     const name = req.body.Name;
  
  //     if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) {
  //       return res.status(400).json({ error: 'Invalid array of objects' });
  //     }
  
  //     const serializedData = JSON.stringify(arrayOfObjects);
  
  //     // Search for existing record with the provided name
  //     let existingRecord = await Settings.findOne({ Name: name });
  
  //     if (existingRecord) {
  //       // If record exists, update its data
  //       existingRecord.Data = serializedData;
  //       await existingRecord.save();
  //       res.json({ message: 'Array of objects updated successfully.', name, data: arrayOfObjects });
  //     } else {
  //       // If record doesn't exist, create a new one
  //       const data = await Settings.create({ Data: serializedData, Name: name });
  //       res.json({ message: 'New record created successfully.', name, data: arrayOfObjects });
  //     }
  //   } catch (error) {
  //     console.error('Error updating array of objects:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // };
  
  const Update_data = async (req, res) => {
    try {
      const arrayOfObjects = req.body.arrayOfObjects;
      const name = req.body.Name;
  
      if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) {
        return res.status(400).json({ error: 'Invalid array of objects' });
      }
  
      const serializedData = JSON.stringify(arrayOfObjects);
  
      // Search for existing record with the provided name
      let existingRecord = await Entity.findOne({ where: { Name: name } });
  
      if (existingRecord) {
        // If record exists, update its data
        existingRecord.Data = serializedData;
        await existingRecord.save();
        res.json({ message: 'Array of objects updated successfully.', name, data: arrayOfObjects });
      } else {
        // If record doesn't exist, create a new one
        const data = await Entity.create({ Data: serializedData, Name: name });
        res.json({ message: 'New record created successfully.', name, data: arrayOfObjects });
      }
    } catch (error) {
      console.error('Error updating array of objects:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  
  
  
  module.exports = { Add_data,GetAllLIST,Update_data }
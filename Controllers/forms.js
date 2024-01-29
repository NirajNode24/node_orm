var db = require('../models/index.js')
const Settings = db.From_data;



// const Add_data= async (req, res) => {
//       try {
//         const arrayOfObjects = req.body.arrayOfObjects;
        
//         if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) {
//           return res.status(400).json({ error: 'Invalid array of objects' });
//         }
//         const serializedData = JSON.stringify(arrayOfObjects);
//         const data = await Settings.create({ Data: serializedData });
    
//         res.json({ message: 'Array of objects saved successfully.',data});
//       } catch (error) {
//         console.error('Error saving array of objects:', error);
//         res.status(500).json({ error: 'Internal server error' });
//       }
//     }; 

const Add_data= async (req, res) => {
  try {
    const arrayOfObjects = req.body.arrayOfObjects;
    const name = req.body.Name
    
    if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) {
      return res.status(400).json({ error: 'Invalid array of objects' });
    }
    const serializedData = JSON.stringify(arrayOfObjects);
    const data = await Settings.create({ Data: serializedData, Name: req.body.Name });

    res.json({ message: 'Array of objects saved successfully.', data,name });
  } catch (error) {
    console.error('Error saving array of objects:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};   

const GetAllLIST = async (req, res) => {
  try {
    const allData = await Settings.findAll({
      attributes: ['data','name']
  });

    res.json({ message: 'List of forms',allData});
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}




    module.exports = { Add_data,GetAllLIST }
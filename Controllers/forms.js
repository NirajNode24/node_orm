var db = require('../models/index.js')
const Settings = db.From_data;

// const Add_data=  async (req, res) => {
//       const arrayOfObjects = req.body.arrayOfObjects;
//       console.log(arrayOfObjects)
  
//       if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) {
//         return res.status(400).json({ error: 'Invalid array of objects' });
//       }
  
//       const serializedData = JSON.stringify(arrayOfObjects);
  
//       await Settings.create({ data: serializedData });
  
//       res.json({ message: 'Array of objects saved successfully.' });
   
//     }

const Add_data= async (req, res) => {
      try {
        const arrayOfObjects = req.body.arrayOfObjects;
        
        if (!arrayOfObjects || !Array.isArray(arrayOfObjects)) {
          return res.status(400).json({ error: 'Invalid array of objects' });
        }
        const serializedData = JSON.stringify(arrayOfObjects);
        const data = await Settings.create({ Data: serializedData });
        console.log(data)
        res.json({ message: 'Array of objects saved successfully.',data});
      } catch (error) {
        console.error('Error saving array of objects:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }; 



    module.exports = { Add_data }
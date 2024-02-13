
const mycon = require('../DB/mydb')

// Controllers
const createEntityData = (req, res) => {
  const data = req.body;
  console.log(data)
  // Insert data into the entitydata table
  mycon.query('INSERT INTO EntityData SET ?', data, (err, result) => {
    if (err) {
    
      console.error('Error inserting data: ' + err.stack);
      res.status(500).send('Error inserting data');
      return;
    }

    const id = result.insertId;
    // res.status(200).send(`Data inserted successfully with id : ${id}`);
    res.status(201).send(`${id}`);
  });
};

const getEntityDataById = (req, res) => {
  const entityId = req.params.id;
  console.log(entityId)
  // Retrieve data from the entitydata table based on the id
  mycon.query('SELECT * FROM EntityData WHERE id = ?', entityId, (err, result) => {
    if (err) {
      console.error('Error retrieving data: ' + err.stack);
      res.status(500).send('Error retrieving data');
      return;
    }

    if (result.length === 0) {
      res.status(404).send('Entity data not found');
      return;
    }

    res.status(200).json(result[0]);
  });
};

const updateEntityDataById = (req, res) => {
  const entityId = req.params.id;
  const newData = req.body;
  // Update data in the entitydata table based on the id
  mycon.query('UPDATE EntityData SET ? WHERE id = ?', [newData, entityId], (err, result) => {
    if (err) {
      console.error('Error updating data: ' + err.stack);
      res.status(500).send('Error updating data');
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send('Entity data not found');
      return;
    }

    console.log('Updated ' + result.affectedRows + ' row(s)');
    res.status(200).send('Data updated successfully');
  });
};

const deleteEntityDataById = (req, res) => {
  const entityId = req.params.id;
  // Delete data from the entitydata table based on the id
  mycon.query('DELETE FROM EntityData WHERE id = ?', entityId, (err, result) => {
    if (err) {
      console.error('Error deleting data: ' + err.stack);
      res.status(500).send('Error deleting data');
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send('Entity data not found');
      return;
    }

    console.log('Deleted ' + result.affectedRows + ' row(s)');
    res.status(200).send('Data deleted successfully');
  });
};

const EntityDataList = (req, res) => {
  mycon.query('SELECT * FROM EntityData', (err, result) => {
    if (err) {
      console.error('Error retrieving data: ' + err.stack);
      res.status(500).send('Error retrieving data');
      return;
    }
    res.status(200).json(result);
  })
}


 
module.exports = {deleteEntityDataById,updateEntityDataById,getEntityDataById,createEntityData,EntityDataList}
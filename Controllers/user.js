
const mycon = require('../DB/mydb')

const createUserData = (req, res) => {
    const data = req.body;
    console.log(data)
    // Insert data into the Userdata table
    mycon.query('INSERT INTO UsersData SET ?', data, (err, result) => {
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
  
  const getUserDataById = (req, res) => {
    const UserId = req.params.id;
    console.log(UserId)
    // Retrieve data from the Userdata table based on the id
    mycon.query('SELECT * FROM UsersData WHERE id = ?', UserId, (err, result) => {
      if (err) {
        console.error('Error retrieving data: ' + err.stack);
        res.status(500).send('Error retrieving data');
        return;
      }
  
      if (result.length === 0) {
        res.status(404).send('User data not found');
        return;
      }
  
      res.status(200).json(result[0]);
    });
  };
  
  const updateUserDataById = (req, res) => {
    const UserId = req.params.id;
    const newData = req.body;
    // Update data in the Userdata table based on the id
    mycon.query('UPDATE UsersData SET ? WHERE id = ?', [newData, UserId], (err, result) => {
      if (err) {
        console.error('Error updating data: ' + err.stack);
        res.status(500).send('Error updating data');
        return;
      }
  
      if (result.affectedRows === 0) {
        res.status(404).send('User data not found');
        return;
      }
  
      console.log('Updated ' + result.affectedRows + ' row(s)');
      res.status(200).send('Data updated successfully');
    });
  };
  
  const deleteUserDataById = (req, res) => {
    const UserId = req.params.id;
    // Delete data from the Userdata table based on the id
    mycon.query('DELETE FROM UsersData WHERE id = ?', UserId, (err, result) => {
      if (err) {
        console.error('Error deleting data: ' + err.stack);
        res.status(500).send('Error deleting data');
        return;
      }
  
      if (result.affectedRows === 0) {
        res.status(404).send('User data not found');
        return;
      }
  
      console.log('Deleted ' + result.affectedRows + ' row(s)');
      res.status(200).send('Data deleted successfully');
    });
  };
  
  const UserDataList = (req, res) => {
    mycon.query('SELECT * FROM UsersData', (err, result) => {
      if (err) {
        console.error('Error retrieving data: ' + err.stack);
        res.status(500).send('Error retrieving data');
        return;
      }
      res.status(200).json(result);
    })
  }
  
  
   
  module.exports = {deleteUserDataById,updateUserDataById,getUserDataById,createUserData,UserDataList}
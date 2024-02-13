const express = require('express');
const router = express.Router();
const Form_setting = require('../Controllers/forms')

// setting

// Define a route for a specific resource

router.post('/add',Form_setting.Add_data)
router.get('/list',Form_setting.GetAllLIST)
router.put('/update',Form_setting.Update_data)




module.exports = router;
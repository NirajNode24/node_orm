const express = require('express');
const router = express.Router();
const Form_setting = require('../Controllers/forms')

// setting

// Define a route for a specific resource

router.post('/',Form_setting.Add_data)

module.exports = router;
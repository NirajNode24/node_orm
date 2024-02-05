const express = require('express');
const router = express.Router();
const ECont = require('../Controllers/entity')



// Define a route for a specific resource

router.post('/add',ECont.Add_data)
router.get('/list',ECont.GetAllLIST)
// router.get('/list/:id',ECont.Get_Entite)
router.put('/update/:id',ECont.Update_data)
// router.delete('/delete/:id',ECont.Delete_Entite)


module.exports = router;
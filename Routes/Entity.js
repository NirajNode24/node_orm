const express = require('express');
const router = express.Router();
const ECont = require('../Controllers/entity')



// Define a route for a specific resource

router.post('/data', ECont.createEntityData);
router.get('/data/:id', ECont.getEntityDataById);
router.put('/data/:id', ECont.updateEntityDataById);
router.delete('/data/:id', ECont.deleteEntityDataById);
router.get('/', ECont.EntityDataList);

module.exports = router;
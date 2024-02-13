const express = require('express')
const router = express.Router()
const User = require('../Controllers/user')



router.post('/data', User.createUserData);
router.get('/data/:id',User.getUserDataById);
router.put('/data/:id', User.updateUserDataById);
router.delete('/data/:id', User.deleteUserDataById);
router.get('/', User.UserDataList);

module.exports = router;

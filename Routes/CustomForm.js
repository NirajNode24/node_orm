const express = require('express');
const router = express.Router();
const Custom = require('../Controllers/forms')


router.post('/entity',Custom.EntityForm)
router.post('/user',Custom.UserForm)
router.post('/board',Custom.BoardForm)
router.post('/teams',Custom.TeamsForm)



module.exports = router;
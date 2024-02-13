const express = require('express')
const router = express.Router()
const BMeeting = require('../Controllers/bmeeting')



router.post('/data', BMeeting.createBMeetingData);
router.get('/data/:id',BMeeting.getBMeetingDataById);
router.put('/data/:id', BMeeting.updateBMeetingDataById);
router.delete('/data/:id', BMeeting.deleteBMeetingDataById);
router.get('/', BMeeting.BMeetingDataList);

module.exports = router;

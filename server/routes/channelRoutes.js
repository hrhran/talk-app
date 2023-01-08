
const express = require('express');
const router = express.Router();
const { newChannel, fetchMsgs } = require('../controllers/channelController');
const { auth } = require('../middlewares/auth');

// router.post('/new', auth, newChannel);
// router.get('/user/:userId', auth, fetchMsgs);

module.exports = router;

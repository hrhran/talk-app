
const express = require('express');
const router = express.Router();
const { newMessage, fetchUserMsgs, fetchServerMsgs } = require('../controllers/messageController');
const { auth } = require('../middlewares/auth');

// router.post('/new', auth, newMessage);
// router.get('/user/:userId', auth, fetchUserMsgs);
// router.get('/server/:serverId', auth, fetchServerMsgs);

module.exports = router;

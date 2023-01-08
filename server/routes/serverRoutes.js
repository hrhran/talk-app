
const express = require('express');
const router = express.Router();
const { joinServer, fetchChannels, fetchServers } = require('../controllers/serverController');
const { auth } = require('../middlewares/auth');

// router.post('/join', auth, joinServer);
// router.get('/:channelId', auth, fetchChannels);
// router.get('/', auth, fetchServers);

module.exports = router;

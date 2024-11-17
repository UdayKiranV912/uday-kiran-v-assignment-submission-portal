const express = require('express');
const { getUserData } = require('../controllers/userController');

const router = express.Router();

// User route
router.get('/data', getUserData);

module.exports = router;

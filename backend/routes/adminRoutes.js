// routes/adminRoutes.js

const express = require('express');
const { getUsers, getAssignments, deleteAssignment } = require('../controllers/adminController');
const router = express.Router();

// Admin routes
router.get('/users', getUsers);
router.get('/assignments', getAssignments);
router.delete('/assignments/:id', deleteAssignment);

module.exports = router;

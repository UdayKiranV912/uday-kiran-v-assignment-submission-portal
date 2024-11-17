// routes/assignmentRoutes.js

const express = require('express');
const { createAssignment, getAssignments, updateAssignment, deleteAssignment } = require('../controllers/assignmentController');
const router = express.Router();

// Assignment routes
router.post('/assignments', createAssignment);
router.get('/assignments', getAssignments);
router.put('/assignments/:id', updateAssignment);
router.delete('/assignments/:id', deleteAssignment);

module.exports = router;

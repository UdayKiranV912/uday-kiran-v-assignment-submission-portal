// controllers/adminController.js

// Mock data for users and assignments (in-memory for now)
const users = [
  { id: 1, email: 'admin@example.com', role: 'admin' },
  { id: 2, email: 'user@example.com', role: 'user' },
];

const assignments = [
  { id: 1, title: 'Math Assignment 1', description: 'Solve algebra problems', dueDate: '2024-12-01' },
  { id: 2, title: 'History Assignment 1', description: 'Write an essay on WWII', dueDate: '2024-12-10' },
];

// Get all users (Admin-only)
const getUsers = (req, res) => {
  return res.status(200).json(users);
};

// Get all assignments (Admin-only)
const getAssignments = (req, res) => {
  return res.status(200).json(assignments);
};

// Delete an assignment (Admin-only)
const deleteAssignment = (req, res) => {
  const { id } = req.params;
  const assignmentIndex = assignments.findIndex(a => a.id === parseInt(id));

  if (assignmentIndex !== -1) {
    assignments.splice(assignmentIndex, 1);
    return res.status(200).json({ message: 'Assignment deleted successfully' });
  }

  return res.status(404).json({ message: 'Assignment not found' });
};

module.exports = { getUsers, getAssignments, deleteAssignment };

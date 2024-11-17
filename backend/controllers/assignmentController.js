// controllers/assignmentController.js

// Mock data for assignments
let assignments = [
  { id: 1, title: 'Math Assignment 1', description: 'Solve algebra problems', dueDate: '2024-12-01' },
  { id: 2, title: 'History Assignment 1', description: 'Write an essay on WWII', dueDate: '2024-12-10' },
];

// Create a new assignment (admin only)
const createAssignment = (req, res) => {
  const { title, description, dueDate } = req.body;
  
  // Create a new assignment object
  const newAssignment = {
    id: assignments.length + 1,
    title,
    description,
    dueDate,
  };

  assignments.push(newAssignment);

  return res.status(201).json({ message: 'Assignment created successfully', assignment: newAssignment });
};

// Get all assignments
const getAssignments = (req, res) => {
  return res.status(200).json(assignments);
};

// Update an assignment (admin only)
const updateAssignment = (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate } = req.body;

  const assignment = assignments.find(a => a.id === parseInt(id));

  if (!assignment) {
    return res.status(404).json({ message: 'Assignment not found' });
  }

  // Update the assignment
  assignment.title = title || assignment.title;
  assignment.description = description || assignment.description;
  assignment.dueDate = dueDate || assignment.dueDate;

  return res.status(200).json({ message: 'Assignment updated successfully', assignment });
};

// Delete an assignment (admin only)
const deleteAssignment = (req, res) => {
  const { id } = req.params;
  const assignmentIndex = assignments.findIndex(a => a.id === parseInt(id));

  if (assignmentIndex === -1) {
    return res.status(404).json({ message: 'Assignment not found' });
  }

  assignments.splice(assignmentIndex, 1);
  return res.status(200).json({ message: 'Assignment deleted successfully' });
};

module.exports = { createAssignment, getAssignments, updateAssignment, deleteAssignment };

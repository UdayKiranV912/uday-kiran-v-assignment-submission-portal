// controllers/userController.js
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// Function to get all users
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// Function to add a new user
const addUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Export the functions
module.exports = { getUsers, addUser };
console.log("Exported from userController.js:", { getUsers, addUser });

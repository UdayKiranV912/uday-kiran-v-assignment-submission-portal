const jwt = require('jsonwebtoken');

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (user && user.password === password) {
    const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } else {
    res.status(400).json({ message: 'Invalid email or password' });
  }
};

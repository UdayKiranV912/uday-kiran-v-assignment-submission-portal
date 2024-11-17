const jwt = require('../utils/jwt');

const isAdmin = (req, res, next) => {
  const token = req.headers['authorization'];
  const payload = jwt.verifyToken(token);
  if (payload && payload.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
};

module.exports = { isAdmin };

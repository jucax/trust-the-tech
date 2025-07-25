const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to protect routes and check JWT
module.exports = function (req, res, next) {
  // Get token from header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId; // Attach user ID to request
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}; 
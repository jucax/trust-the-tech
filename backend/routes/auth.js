const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const db = require('../db');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      // Check if user exists
      const userExists = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userExists.rows.length > 0) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // Insert user into DB
      const newUser = await db.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
        [name, email, hashedPassword]
      );
      // Create JWT
      const token = jwt.sign(
        { userId: newUser.rows[0].id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
      res.status(201).json({ user: newUser.rows[0], token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   POST /api/auth/login
// @desc    Login user and return JWT
// @access  Public
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').exists().withMessage('Password is required'),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      // Check if user exists
      const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      if (user.rows.length === 0) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      // Compare password
      const isMatch = await bcrypt.compare(password, user.rows[0].password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      // Create JWT
      const token = jwt.sign(
        { userId: user.rows[0].id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
      // Return user info (excluding password) and token
      const { password: _, ...userInfo } = user.rows[0];
      res.json({ user: userInfo, token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router; 
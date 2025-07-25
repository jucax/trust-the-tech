const express = require('express');
const { body, validationResult } = require('express-validator');
const db = require('../db');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/courses
// @desc    Get all courses (public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM courses ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/courses/:id
// @desc    Get a single course by ID (public)
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM courses WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Course not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/courses
// @desc    Create a new course (protected)
// @access  Private (admin/instructor)
router.post(
  '/',
  auth,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('instructor').notEmpty().withMessage('Instructor is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, instructor, image_url } = req.body;
    try {
      const result = await db.query(
        'INSERT INTO courses (title, description, instructor, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
        [title, description, instructor, image_url || null]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT /api/courses/:id
// @desc    Update a course (protected)
// @access  Private (admin/instructor)
router.put(
  '/:id',
  auth,
  [
    body('title').optional().notEmpty(),
    body('description').optional().notEmpty(),
    body('instructor').optional().notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, description, instructor, image_url } = req.body;
    try {
      const result = await db.query(
        'UPDATE courses SET title = COALESCE($1, title), description = COALESCE($2, description), instructor = COALESCE($3, instructor), image_url = COALESCE($4, image_url) WHERE id = $5 RETURNING *',
        [title, description, instructor, image_url, req.params.id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ msg: 'Course not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   DELETE /api/courses/:id
// @desc    Delete a course (protected)
// @access  Private (admin/instructor)
router.delete('/:id', auth, async (req, res) => {
  try {
    const result = await db.query('DELETE FROM courses WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Course not found' });
    }
    res.json({ msg: 'Course deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router; 
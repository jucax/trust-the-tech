const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Get all courses
router.get('/', async (req, res) => {
  const courses = await prisma.course.findMany({
    include: { lessons: true }
  });
  res.json(courses);
});

// Get course by id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid course id' });
  const course = await prisma.course.findUnique({
    where: { id },
    include: { lessons: true }
  });
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course);
});

module.exports = router; 
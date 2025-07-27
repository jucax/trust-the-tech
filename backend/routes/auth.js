const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(`[REGISTER ATTEMPT] Email: ${email}`);
  if (!name || !email || !password) {
    console.log(`[REGISTER ERROR] Missing fields for email: ${email}`);
    return res.status(400).json({ error: 'All fields required' });
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`[REGISTER ERROR] Email already registered: ${email}`);
    return res.status(409).json({ error: 'Email already registered' });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  });
  console.log(`[REGISTER SUCCESS] User created: ${email}`);
  res.status(201).json({ id: user.id, name: user.name, email: user.email });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`[LOGIN ATTEMPT] Email: ${email}`);
  if (!email || !password) {
    console.log(`[LOGIN ERROR] Missing fields for email: ${email}`);
    return res.status(400).json({ error: 'Email and password required' });
  }
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    console.log(`[LOGIN ERROR] User not found: ${email}`);
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    console.log(`[LOGIN ERROR] Invalid password for: ${email}`);
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
  console.log(`[LOGIN SUCCESS] User logged in: ${email}`);
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

module.exports = router; 
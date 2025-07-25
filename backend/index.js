// Import required modules
const express = require('express'); // Express framework
const cors = require('cors'); // Cross-Origin Resource Sharing
const helmet = require('helmet'); // Security headers
const morgan = require('morgan'); // Logging
require('dotenv').config(); // Load environment variables

// Import authentication routes
const authRouter = require('./routes/auth');
const coursesRouter = require('./routes/courses');

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes
app.use(helmet()); // Add security headers
app.use(morgan('dev')); // Log HTTP requests
app.use('/api/auth', authRouter); // Routes for register and login
app.use('/api/courses', coursesRouter); // Routes for course content

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Trust the Tech backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
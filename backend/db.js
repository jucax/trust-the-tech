// db.js - Handles PostgreSQL connection
const { Pool } = require('pg');
require('dotenv').config();

// Create a new pool using the DATABASE_URL from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export the query method for executing SQL queries
module.exports = {
  query: (text, params) => pool.query(text, params),
}; 
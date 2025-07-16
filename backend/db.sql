-- db.sql: SQL schema for Trust the Tech users table

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, -- Unique user ID
    name VARCHAR(100) NOT NULL, -- User's name
    email VARCHAR(100) UNIQUE NOT NULL, -- User's email (unique)
    password VARCHAR(255) NOT NULL, -- Hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Registration date
); 
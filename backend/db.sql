-- db.sql: SQL schema for Trust the Tech users and courses tables

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, -- Unique user ID
    name VARCHAR(100) NOT NULL, -- User's name
    email VARCHAR(100) UNIQUE NOT NULL, -- User's email (unique)
    password VARCHAR(255) NOT NULL, -- Hashed password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Registration date
);

-- Courses table for course content
CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY, -- Unique course ID
    title VARCHAR(200) NOT NULL, -- Course title
    description TEXT NOT NULL, -- Course description
    instructor VARCHAR(100) NOT NULL, -- Instructor name
    image_url TEXT, -- Optional image URL for course
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Creation date
); 
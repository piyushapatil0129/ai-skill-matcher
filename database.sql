CREATE DATABASE skill_matcher;

USE skill_matcher;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    skills TEXT,
    interests TEXT,
    goals TEXT,
    points INT DEFAULT 0
);

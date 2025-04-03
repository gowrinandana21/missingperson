CREATE DATABASE missing_persons;
USE missing_persons;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE missing_persons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    photo VARCHAR(255),
    last_seen DATE NOT NULL,
    location VARCHAR(255),
    body_metrics TEXT
);
ALTER TABLE missing_persons 
ADD COLUMN age INT,
ADD COLUMN contact VARCHAR(20);

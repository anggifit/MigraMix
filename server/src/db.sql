CREATE DATABASE migramixFinal

CREATE TABLE artist(
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(50) NOT NULL,
    userName VARCHAR(8) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    dateOfBirth DATE NOT NULL,
)

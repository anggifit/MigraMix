CREATE DATABASE migramix;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    userName VARCHAR(8) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    dateOfBirth DATE NOT NULL
);
CREATE TABLE artists(artist_id INT UNIQUE references users(id));

CREATE TABLE events_organiser(organiser_id INT UNIQUE references users(id)); 

CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    organiser_id INT references events_organiser(organiser_id),
    start_date DATE NOT NULL,
    location VARCHAR(100) NOT NULL
);

CREATE TABLE event_by_artist(
    id SERIAL PRIMARY KEY,
    event_id INT references events(id),
    event_by_artist_id INT references artists(artist_id)
);
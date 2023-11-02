CREATE DATABASE migramix

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    userName VARCHAR(8) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    dateOfBirth DATE NOT NULL,
    role VARCHAR(50) NOT NULL
)

CREATE TABLE artists(
    id INT REFERENCES users(id),
    ArtistsProfilePicture VARCHAR(50),
    ArtistBio VARCHAR(500) NOT NULL,
    ArtistMainLink VARCHAR(50),
    ArtistSecundaryLink VARCHAR(50),
    ArtistThirdLink VARCHAR(50),
    MusicGenre VARCHAR(50) NOT NULL,
    Performance VARCHAR(50) NOT NULL,
    Type_of_performance VARCHAR(50) NOT NULL,
    ContactNumber INT NOT NULL   
)

CREATE TABLE events_organiser(
    organiser_id INT references users(id)
    
)

CREATE TABLE event_by_artist(
    id SERIAL PRIMARY KEY,
    event_id INT references events(id),
    event_by_artist_id INT references artist(id)
    
)

CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    organiser_id INT references events_organiser(id),
    start_date DATE NOT NULL,
    location VARCHAR(100) NOT NULL
)

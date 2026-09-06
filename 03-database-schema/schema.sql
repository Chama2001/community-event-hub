CREATE DATABASE IF NOT EXISTS community_events_db;
USE community_events_db;

CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_name VARCHAR(200) NOT NULL,
    event_date DATE NOT NULL,
    organizer_email VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS attendees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    attended BOOLEAN DEFAULT FALSE,
    certificate_sent BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

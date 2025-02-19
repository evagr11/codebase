CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    age INTEGER,
    point INTEGER,
    gender TEXT

);

SELECT * FROM users;
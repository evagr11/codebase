CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE NOT NULL,
    descripion TEXT,
    status TEXT NOT NULL
);

SELECT * FROM tasks;
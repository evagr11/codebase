INSERT INTO users (username,password) VALUES ("user0","userpass");

UPDATE users SET password = "nueva_contraseña" WHERE username = "admin";
SELECT * FROM users;
DELETE from users WHERE username = "admin";
SELECT * FROM users;


const betterSqlite3 = require('better-sqlite3');
const path = require('path');

const db = betterSqlite3(path.join(__dirname, '../users.db'));

// Función para obtener todos los usuarios
const getAllUsers = () => {
    const query = db.prepare('SELECT * FROM usuarios');
    return query.all();
};

// Función para añadir un usuario
const addUser = (nombre, pass) => {
    const query = db.prepare('INSERT INTO usuarios (nombre, pass) VALUES (?, ?)');
    query.run(nombre, pass);
    return "Usuario añadido correctamente";
};

// Función para limpiar la tabla de usuarios
const clearUsers = () => {
    const query = db.prepare('DELETE FROM usuarios');
    query.run();
    return "Todos los usuarios han sido eliminados";
};

module.exports = {
    getAllUsers,
    addUser,
    clearUsers
};
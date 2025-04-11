//Controlador
const { getAllUsers, addUser, clearUsers} = require("../models/users"); // Importar las funciones de users.js

const express = require("express");
const router = express.Router();

const AUTH_KEY = '1234';

// Endpoint para obtener todos los usuarios
// El método get se utiliza para obtener datos del servidor
// En este caso, se obtienen todos los usuarios de la base de datos
// La función getAllUsers se encarga de ejecutar la consulta SQL y devolver todos los usuarios
// La respuesta se envía en formato JSON
router.get("/users", (req, res) => {
    const users = getAllUsers();
    res.json(users);
});

// Endpoint para añadir un usuario
// El método post se utiliza para enviar datos al servidor
// En este caso, se envían los datos del nuevo usuario
// El cuerpo de la petición debe contener los datos del nuevo usuario
router.post("/users", (req, res) => {
    const nombre = req.body.nombre;
    const pass = req.body.pass;
    addUser(nombre, pass);
    res.send("Usuario añadido correctamente");
});

// Endpoint para eliminar todos los usuarios
// El método delete se utiliza para eliminar datos del servidor
// En este caso, se eliminan todos los usuarios de la base de datos
// La función clearUsers se encarga de ejecutar la consulta SQL y eliminar todos los usuarios
router.delete("/users", (req, res) => {
    const { key } = req.body;
    if (key !== AUTH_KEY) {
        return res.status(403).send("Clave incorrecta");
    }
    const message = clearUsers();
    res.send(message);
});

module.exports = router;
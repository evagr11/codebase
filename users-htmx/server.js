const {getAllUsers, addUser} = require("./models/users"); // Importar las funciones de users.js

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/users", (req, res) => {
    const users = getAllUsers();
    res.json(users);
});

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
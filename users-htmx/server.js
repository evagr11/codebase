const {getAllUsers, addUser} = require("./models/users"); // Importar las funciones de users.js

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const usersRouter = require("./routes/users"); // Importar el router de usuarios
app.use(usersRouter); // Usar el router de usuarios

app.post("/clear", (req, res) => {
    const { key } = req.body;

    // Clave de autorización
    const AUTH_KEY = "mi_clave_secreta";

    if (key !== AUTH_KEY) {
        return res.status(403).send("Clave incorrecta");
    }

    // Lógica para limpiar la base de datos
    const db = require("./models/db"); // Asegúrate de tener acceso a tu base de datos
    db.query("DELETE FROM users", (err) => {
        if (err) {
            console.error("Error al limpiar la base de datos:", err);
            return res.status(500).send("Error al limpiar la base de datos");
        }
        res.send("Base de datos limpiada correctamente");
    });
});

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
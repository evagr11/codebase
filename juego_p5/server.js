const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const app = express();
const dbPath = path.join(__dirname, 'usuarios.db');
const db = new sqlite3.Database(dbPath);

// Leer el archivo SQL y ejecutar las sentencias
const initSqlPath = path.join(__dirname, 'init.sql'); // Ruta al archivo .sql
fs.readFile(initSqlPath, 'utf8', (err, sql) => {
    if (err) {
        console.error("Error al leer el archivo SQL:", err);
        return;
    }

    // Ejecutamos el contenido del archivo SQL para crear la tabla
    db.exec(sql, (err) => {
        if (err) {
            console.error("Error al ejecutar el archivo SQL:", err);
        } else {
            console.log("Base de datos inicializada con éxito.");
        }
    });
});

app.use(express.static('public'));
app.use(express.json());

// Endpoint para insertar un usuario
app.post('/usuario', (req, res) => {
    const { nombre } = req.body;
    if (!nombre) {
        return res.status(400).send("El campo 'nombre' es requerido.");
    }

    const stmt = db.prepare('INSERT INTO usuarios (nombre) VALUES (?)');
    stmt.run(nombre, function (err) {
        if (err) {
            return res.status(500).send("Error al insertar usuario.");
        }
        res.status(201).send("Usuario insertado correctamente.");
    });
    stmt.finalize();
});

// Endpoint para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    db.all('SELECT * FROM usuarios', [], (err, rows) => {
        if (err) {
            return res.status(500).send("Error al obtener usuarios.");
        }
        res.json(rows);
    });
});

// Endpoint id usuarios
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    db.all('SELECT * FROM usuarios WHERE id = ?', [id], (err, rows) => {
        if (err) {
            return res.status(500).send("Error al obtener usuarios.");
        }else {
            res.json(rows);
        }
    });
});

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});

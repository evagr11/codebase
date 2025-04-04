const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar la base de datos SQLite
const db = new sqlite3.Database('./frutas.db', (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
        db.run(`CREATE TABLE IF NOT EXISTS frutas (id INTEGER PRIMARY KEY, nombre TEXT)`);
    }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejar el POST (añadir fruta)
app.post('/frutas', (req, res) => {
    const fruta = req.body.fruta;
    db.run(`INSERT INTO frutas (nombre) VALUES (?)`, [fruta], function (err) {
        if (err) {
            console.error('Error al insertar en la base de datos:', err.message);
            res.status(500).send('Error al guardar la fruta.');
        } else {
            res.send(`<li>${fruta}</li>`); // Respuesta para actualizar la lista en el frontend
        }
    });
});

// Ruta para obtener las frutas
app.get('/frutas', (req, res) => {
    db.all(`SELECT nombre FROM frutas`, [], (err, rows) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err.message);
            res.status(500).send('Error al obtener las frutas.');
        } else {
            res.send(rows.map(row => `<li>${row.nombre}</li>`).join(''));
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
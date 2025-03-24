const express = require('express');
const betterSqlite3 = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.json());

// Conectar a la base de datos parking.db
const db = betterSqlite3('parking.db');

// Leer y ejecutar el script init.sql
const initSqlPath = path.join(__dirname, 'init.sql');
const initSql = fs.readFileSync(initSqlPath, 'utf8');
db.exec(initSql);

// Ruta principal
app.get('/', (req, res) => {
    res.send("<h1>Bienvenido al sistema de gestión de estacionamiento</h1>");
});

// Obtener todas las plazas de estacionamiento
app.get('/plazas', (req, res) => {
    const query = db.prepare('SELECT * FROM plazas');
    const plazas = query.all();
    res.json(plazas);
});

// Obtener una plaza de estacionamiento por ID
app.get('/plazas/:id', (req, res) => {
    const id = req.params.id;
    const query = db.prepare('SELECT * FROM plazas WHERE id = ?');
    const plaza = query.get(id);
    if (plaza) {
        res.json(plaza);
    } else {
        res.status(404).json({ error: 'Plaza de estacionamiento no encontrada' });
    }
});

// Actualizar el estado de una plaza (disponible/ocupado)
app.put('/plazas/:id', (req, res) => {
    const id = req.params.id;
    const { estado } = req.body;

    if (!['disponible', 'ocupado'].includes(estado)) {
        return res.status(400).json({ error: 'Estado inválido. Debe ser "disponible" o "ocupado".' });
    }

    const query = db.prepare('UPDATE plazas SET estado = ? WHERE id = ?');
    const result = query.run(estado, id);

    if (result.changes > 0) {
        res.json({ message: 'Estado de la plaza actualizado correctamente' });
    } else {
        res.status(404).json({ error: 'Plaza de estacionamiento no encontrada' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`);
});
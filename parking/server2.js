const express = require('express');
const betterSqlite3 = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const port = 3000;
const app = express();

const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

// Conectar a la base de datos parking.db
const db = betterSqlite3('parking.db');

// Leer y ejecutar el script init.sql
const initSqlPath = path.join(__dirname, 'init.sql');
const initSql = fs.readFileSync(initSqlPath, 'utf8');
db.exec(initSql);

// Ruta principal
app.get('/', (req, res) => {
    const rows = db.prepare('SELECT * FROM plazas').all();
    res.json(rows);
});

// Endpoint de conexion
io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.emit('connected', 'Connected to the server');

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
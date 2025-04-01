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

// Endpoint de conexion
io.on('connection', (socket) => {
    console.log('Usuario conectado');
    socket.emit('connected', 'Connected to the server');

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Ruta principal
app.get('/', (req, res) => {
    res.send("<h1>Bienvenido al sistema de gestión de estacionamiento</h1>");
});

// Obtener todas las plazas de estacionamiento y mostrarlas en un HTML externo
app.get('/plazas', (req, res) => {
    const query = db.prepare('SELECT * FROM plazas');
    const plazas = query.all();

    // Leer el archivo HTML externo desde la carpeta "public"
    const htmlPath = path.join(__dirname, 'public', 'plazas.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Generar las filas de la tabla con los datos de las plazas
    let rows = '';
    plazas.forEach(plaza => {
        rows += `
            <tr>
                <td>${plaza.id}</td>
                <td>${plaza.piso_id}</td>
                <td>${plaza.tipo}</td>
                <td>${plaza.estado}</td>
                <td>${plaza.fecha_hora}</td>
            </tr>
        `;
    });

    // Reemplazar un marcador en el HTML con las filas generadas
    html = html.replace('{{rows}}', rows);

    // Enviar el HTML como respuesta
    res.send(html);
});

// Nueva ruta para mostrar las plazas como un dibujo visual, diferenciando por pisos
app.get('/plazasVisual', (req, res) => {
    const query = db.prepare('SELECT * FROM plazas');
    const plazas = query.all();

    // Agrupar las plazas por piso y completar hasta 20 plazas por piso
    const plazasPorPiso = plazas.reduce((acc, plaza) => {
        acc[plaza.piso_id] = acc[plaza.piso_id] || [];
        acc[plaza.piso_id].push(plaza);
        return acc;
    }, {});

    Object.keys(plazasPorPiso).forEach(piso => {
        while (plazasPorPiso[piso].length < 20) {
            plazasPorPiso[piso].push({
                id: `P${piso}-${plazasPorPiso[piso].length + 1}`,
                piso_id: piso,
                tipo: 'publicos',
                estado: 'libre',
            });
        }
    });

    // Leer el archivo HTML externo
    const htmlPath = path.join(__dirname, 'public', 'plazasVisual.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Generar contenido dinámico
    let content = '';
    for (const piso in plazasPorPiso) {
        content += `
            <div class="piso">
                <div class="titulo-piso">Piso ${piso}</div>
                <div class="grid">
        `;
        plazasPorPiso[piso].forEach(plaza => {
            const tipoClase = plaza.tipo;
            const estadoClase = plaza.estado === 'libre' ? 'libre' : 'ocupada';
            content += `
                <div class="plaza ${tipoClase} ${estadoClase}">
                    ${plaza.id}
                </div>
            `;
        });
        content += `</div></div>`;
    }

    // Reemplazar el marcador en el HTML y enviar la respuesta
    res.send(html.replace('{{content}}', content));
});

// Nueva ruta para actualizar el estado de una plaza
app.post('/actualizarPlaza', (req, res) => {
    const { id, estado } = req.body;

    // Actualizar el estado de la plaza en la base de datos
    const query = db.prepare('UPDATE plazas SET estado = ? WHERE id = ?');
    const result = query.run(estado, id);

    // Verificar si se actualizó alguna fila
    if (result.changes > 0) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Endpoint para servir el archivo actualizarPlaza.html
app.get('/actualizarPlaza', (req, res) => {
    const htmlPath = path.join(__dirname, 'public', 'actualizarPlaza.html');
    res.sendFile(htmlPath);
});

// Endpoint para obtener las plazas agrupadas por piso
app.get('/api/plazas', (req, res) => {
    const query = db.prepare('SELECT * FROM plazas');
    const plazas = query.all();

    // Agrupar las plazas por piso
    const plazasPorPiso = plazas.reduce((acc, plaza) => {
        acc[plaza.piso_id] = acc[plaza.piso_id] || [];
        acc[plaza.piso_id].push(plaza);
        return acc;
    }, {});

    res.json(plazasPorPiso);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
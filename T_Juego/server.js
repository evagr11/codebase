const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Variable para almacenar los puntos
let puntos = 0;

// Ruta GET para obtener los puntos
app.get('/puntos', (req, res) => {
  res.json({ puntos });
});

// Ruta POST para incrementar los puntos
app.post('/incrementar', (req, res) => {
  puntos++;
  res.json({ puntos });
});

// Servir los archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

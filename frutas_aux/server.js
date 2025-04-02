const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configurar la base de datos SQLite
const db = new sqlite3.Database("./frutas.db");

// Crear la tabla si no existe
db.run(
  `CREATE TABLE IF NOT EXISTS frutas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL
  )`
);

// Ruta para obtener todas las frutas
app.get("/frutas", (req, res) => {
  db.all("SELECT nombre FROM frutas", [], (err, rows) => {
    const frutas = rows.map((row) => row.nombre);
    res.json(frutas);
  });
});

// Ruta para agregar una nueva fruta
app.post("/frutas", (req, res) => {
  const fruta = req.body.fruta;
  db.run("INSERT INTO frutas (nombre) VALUES (?)", [fruta], function () {
    res.json({ id: this.lastID, nombre: fruta });
  });
});

app.listen(3000, () => console.log("Servidor funcionando en 3000"));
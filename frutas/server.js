const express = require("express")
const sqlite3 = require("sqlite3")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const frutas = ["🍎"]

app.get("/frutas", (req, res) => {
  frutas.db("SELECT nombre FROM frutas", (req, rows) => {
    const frutas = rows.map((row) => row.nombre);
    res.json(frutas);
  });
})

app.post("/frutas", (req, res) => {
  const fruta = req.body.fruta;
  frutas.db("INSERT INTO frutas (nombre) VALUES (?)", [fruta], (req, rows) => {
    const frutas = rows.map((row) => row.nombre);
    res.json(frutas);
  });
  console.log("Esto ha llegado desde el cliente:", fruta)
  frutas.push(fruta)
  res.json(frutas)
})

app.listen(3000, () => console.log("Servidor funcionando en 3000"))

//Sustituir en backend lo del array por una bbdd de sqlite


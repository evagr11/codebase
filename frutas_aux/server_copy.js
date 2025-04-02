const express = require("express");
const betterSqlite3 = require("better-sqlite3");

const app = express();

const db = betterSqlite3("frutas.db"); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/frutas", (req, res) => {
    const query = db.prepare("SELECT * FROM frutas");
    const frutas = query.all();
    res.json(frutas);
});

app.listen(3000, () => 
    console.log("Servidor funcionando en 3000")
);
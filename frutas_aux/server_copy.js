const express = require("express");
const betterSqlite3 = require("better-sqlite3");

const app = express();

const db = betterSqlite3("frutas.db"); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/frutas", (req, res) => {
    console.log(req.headers.accept);
    if(req.headers.accept === "application/json") {
    const query = db.prepare("SELECT * FROM frutas");
    const frutas = query.all();
    res.json(frutas);
    } else {
        let html = "<ul>";
        const query = db.prepare("SELECT * FROM frutas");
        const frutas = query.all();
        frutas.forEach((fruta) => {
            html += `<li>${fruta.nombre}</li>`;
        })
        html += "</ul>";
    }
});

app.post("/frutas", (req, res) => {
    console.log(req.headers);
    res.send("Petición recibida");
});

app.listen(3000, () => 
    console.log("Servidor funcionando en 3000")
);
const express = require('express');

const app = express();
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000")
})
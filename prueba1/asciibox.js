let ancho = 3
let largo = 3

let Box = ["╔", "╗", "╚", "╝", "║", "═"]
let fila = ""
let columnas = "║"
for (let i = 0; i < ancho; i++){
    fila = fila + "═"
    columnas = columnas + " "
}
columnas = columnas + "║"

console.log("╔" + fila + "╗")
for (let i = 0; i < largo; i++){
    console.log(columnas)
}
console.log("╚" + fila + "╝")
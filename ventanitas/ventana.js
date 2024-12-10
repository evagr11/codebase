const esquina1 = "╔";
const esquina2 = "╗";
const esquina3 = "╚";
const esquina4 = "╝";
const horizontal = "═";
const vertical = "║";

const ancho = 7;
const alto = 3;

//parte superior
let superior = esquina1;
for(let i = 0; i < ancho; i++){
    superior += horizontal
}
superior += esquina2;
console.log(superior)

//parte media
let mid = vertical;
for(let i = 0; i < ancho; i++){
    mid += " "
}
mid += vertical;
for(let i = 0; i < alto; i++){
    console.log(mid)
}

//parte inferior
let inferior = esquina3;
for(let i = 0; i < ancho; i++){
    inferior += horizontal
}
inferior += esquina4;
console.log(inferior)

//node ventana.js//
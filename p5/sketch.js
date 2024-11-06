const vocales = "aeiou".split("")
const consonantes = "qwrtypsdfghjklñzxcvbnm".split("")
console.log(vocales, consonantes)


function crearPalabra(n_silabas){
  let palabra = ""
  for(let i = 0; i < n_silabas; i++){
    palabra += random(consonantes) + random(vocales)
  }
  return palabra
}

function setup() {
  createCanvas(400, 400);
  frameRate(1)
  background(220);
}
  
function draw() {
  text(crearPalabra(random(5)), random(width), random(height));
}
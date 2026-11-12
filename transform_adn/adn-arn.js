/**
 * @file
 * Ejercicio de cadenas: cambia las U por T en una secuencia.
 */
let prueba = "AAGUAUGAA"

//let lista = prueba.split('') crear una lista
let resultado = ""
for (let letra of prueba) {
    console.log(letra)
        if(letra === "U"){
            resultado += "T"
        }
        else{
            resultado += letra
        }
}
console.log(prueba, resultado)
document.body.appendChild("prueba")



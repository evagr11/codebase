let puntos = 0;
const puntosDiv = document.getElementById('puntos');
const clickButton = document.getElementById('clickButton');

// Función para obtener los puntos desde el backend
function obtenerPuntos() {
  fetch('/puntos')
    .then(response => response.json())
    .then(data => {
      puntos = data.puntos;
      puntosDiv.innerText = `Puntos: ${puntos}`;
    });
}

// Función para incrementar los puntos en el backend
function incrementarPuntos() {
  fetch('/incrementar', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      puntos = data.puntos;
      puntosDiv.innerText = `Puntos: ${puntos}`;
    });
}

// Evento al hacer clic en el botón
clickButton.addEventListener('click', incrementarPuntos);

// Al cargar, obtenemos los puntos desde el servidor
function setup() {
  obtenerPuntos();
}
setup();

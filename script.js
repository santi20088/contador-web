// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const tarjeta = document.querySelector(".tarjeta");

// 2. Variable de estado (let, porque su valor cambia)
let likes = 0;

// 3. Obtener la hora exacta en formato HH:MM:SS
function obtenerHora() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

// RETO 2: cambiar color si likes > 10 (manipulación manual del DOM)
function actualizarColor() {
  textoContador.classList.toggle("alto", likes > 10);
  tarjeta.classList.toggle("fondo-alto", likes > 10);
}

// 4. Escuchar el evento 'click' y manipular el DOM
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes; // Actualizamos el DOM directamente

  // Crear la fila y las celdas dinámicamente
  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  const celdaHora = document.createElement("td");

  celdaNumero.textContent = likes;
  celdaHora.textContent = obtenerHora();

  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);

  // Agregar la fila al INICIO para que lo más reciente quede arriba
  cuerpoTabla.prepend(fila);

  actualizarColor(); // RETO 2
});

// RETO 1: Restar like (también elimina el último registro)
botonRestar.addEventListener("click", () => {
  if (likes > 0) {
    likes--;
    textoContador.textContent = likes;
    cuerpoTabla.firstElementChild.remove(); // quita la fila más reciente
    actualizarColor(); // RETO 2
  }
});

// RETO 1: Reiniciar a cero
botonReiniciar.addEventListener("click", () => {
  likes = 0;
  textoContador.textContent = likes;
  cuerpoTabla.innerHTML = ""; // vacía la tabla
  actualizarColor(); // RETO 2
});
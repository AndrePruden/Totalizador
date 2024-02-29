import precio_neto from "./funciones";

const cantidad = document.querySelector("#cantidad-item");
const precio = document.querySelector("#precio-item");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadNumber = Number.parseInt(cantidad.value);
  const precioNumber = Number.parseInt(precio.value);

  div.innerHTML = "<p> Precio Neto: " + precio_neto(cantidadNumber, precioNumber) + "$</p>";
});

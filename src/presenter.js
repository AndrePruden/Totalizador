import funs from "./funciones";

const cantidad = document.querySelector("#cantidad-item");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div1 = document.querySelector("#precioNeto-div");
const div2 = document.querySelector("#impuesto-div");
const div3 = document.querySelector("#descuento-div");
const div4 = document.querySelector("#precioTotal-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadNumber = Number.parseInt(cantidad.value);
  const precioNumber = Number.parseInt(precio.value);
  const estadoValue = estado.value;

  const precioNeto = funs.precio_neto(cantidadNumber, precioNumber);

  div1.innerHTML = "<p> Precio Neto: " + precioNeto + "$</p>";
  div2.innerHTML = "<p> Impuesto para " + estadoValue + "(" + funs.impuesto(estadoValue)*100 + "%): " + precioNeto*funs.impuesto(estadoValue) + "$</p>";
  div3.innerHTML = "<p> Descuento("+ funs.descuento(precioNeto)*100 +"%): " + precioNeto*funs.descuento(precioNeto) + "$</p>";
  div4.innerHTML = "<p> Precio Total(Descuento e Impuesto): " + funs.getTotal(precioNeto, estadoValue) + "$</p>";

});

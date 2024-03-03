import funs from "./funciones";

const cantidad = document.querySelector("#cantidad-item");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const form = document.querySelector("#totalizador-form");
const div1 = document.querySelector("#precioNeto-div");
const div2 = document.querySelector("#impuesto-div");
const div3 = document.querySelector("#descuento-div");
const div4 = document.querySelector("#precioTotal-div");
const div5 = document.querySelector("#impuesto2-div");
const div6 = document.querySelector("#impuestoTotal-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadNumber = Number.parseInt(cantidad.value);
  const precioNumber = Number.parseInt(precio.value);
  const estadoValue = estado.value;
  const categoriaValue = categoria.value;

  const precioNeto = funs.precio_neto(cantidadNumber, precioNumber);

  const impuestoTotal = parseFloat((precioNeto*funs.impuesto(estadoValue)).toFixed(3)) + parseFloat((precioNeto*funs.impuestoCat(categoriaValue)).toFixed(3))

  if(cantidadNumber <= 0 || isNaN(cantidadNumber) || precioNumber <= 0 || isNaN(precioNumber))
  {
    div1.innerHTML = "<p> ERROR! </p>";
  }
  else{
  div1.innerHTML = "<p> Precio Neto: " + precioNeto + "$</p>";
  div2.innerHTML = "<p> Impuesto para " + estadoValue + "(" + funs.impuesto(estadoValue)*100 + "%): " + (precioNeto*funs.impuesto(estadoValue)).toFixed(3) + "$</p>";
  div3.innerHTML = "<p> Descuento("+ funs.descuento(precioNeto)*100 +"%): " + precioNeto*funs.descuento(precioNeto) + "$</p>";
  div4.innerHTML = "<p> Precio Total(Descuento e Impuesto): " + (funs.getTotal(precioNeto, estadoValue, categoriaValue)).toFixed(3) + "$</p>";
  div5.innerHTML = "<p> Impuesto para la categoria \"" + categoriaValue + "\"(" + (funs.impuestoCat(categoriaValue)*100).toFixed(2) + "%): " + (precioNeto*funs.impuestoCat(categoriaValue)).toFixed(3) + "$</p>";
  div6.innerHTML = "<p> Impuesto Total a pagar:(Estado - Categoria)[" + ((funs.impuesto(estadoValue)*100)+funs.impuestoCat(categoriaValue)*100) + "%]: " + (funs.sumar(parseFloat((precioNeto*funs.impuesto(estadoValue)).toFixed(3)), parseFloat((precioNeto*funs.impuestoCat(categoriaValue)).toFixed(3)))).toFixed(3) + "$</p>";
 }
});

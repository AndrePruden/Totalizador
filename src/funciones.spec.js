import precio_neto from "./funciones.js";

describe("Calcular Precio Neto", () => {
  it("Deberia multiplicar la cantidad por el precio", () => {
    expect(precio_neto(5, 2)).toEqual(10);
  });
});
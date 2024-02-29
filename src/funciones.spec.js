import funs from "./funciones.js";

describe("Calcular Precio Neto", () => {
  it("Deberia multiplicar la cantidad por el precio", () => {
    expect(funs.precio_neto(5, 2)).toEqual(10);
  });
});

  describe("Obtener Impuesto", () => {
    it("Deberia obtener 0.0665 de impuesto para el estado UT", () => {
      expect(funs.impuesto("UT")).toEqual(0.0665);
    });   
});

describe("Obtener Impuesto", () => {
    it("Deberia obtener 0.08 de impuesto para el estado NV", () => {
      expect(funs.impuesto("NV")).toEqual(0.08);
    });   
});

describe("Obtener Impuesto", () => {
    it("Deberia obtener 0.0625 de impuesto para el estado TX", () => {
      expect(funs.impuesto("TX")).toEqual(0.0625);
    });   
});

describe("Obtener Impuesto", () => {
    it("Deberia obtener 0.04 de impuesto para el estado AL", () => {
      expect(funs.impuesto("AL")).toEqual(0.04);
    });   
});

describe("Obtener Impuesto", () => {
    it("Deberia obtener 0.0825 de impuesto para el estado CA", () => {
      expect(funs.impuesto("CA")).toEqual(0.0825);
    });   
});
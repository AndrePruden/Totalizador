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

describe("Obtener Porcentaje de Descuento", () => {
  it("Deberia obtener 0 de descuento para un precio neto de <1000", () => {
    expect(funs.descuento(950)).toEqual(0);
  });   
});

describe("Obtener Porcentaje de Descuento", () => {
  it("Deberia obtener 0.03 de descuento para un precio neto de >=1000 y <3000", () => {
    expect(funs.descuento(1250)).toEqual(0.03);
  });   
});

describe("Obtener Porcentaje de Descuento", () => {
  it("Deberia obtener 0.05 de descuento para un precio neto de >=3000 y <7000", () => {
    expect(funs.descuento(4520)).toEqual(0.05);
  });   
});

describe("Obtener Porcentaje de Descuento", () => {
  it("Deberia obtener 0.07 de descuento para un precio neto de >=7000 y <10000", () => {
    expect(funs.descuento(9880)).toEqual(0.07);
  });   
});

describe("Obtener Porcentaje de Descuento", () => {
  it("Deberia obtener 0.1 de descuento para un precio neto de >=10000 y <30000", () => {
    expect(funs.descuento(21546)).toEqual(0.1);
  });   
});

describe("Obtener Porcentaje de Descuento", () => {
  it("Deberia obtener 0.15 de descuento para un precio neto de >=30000", () => {
    expect(funs.descuento(35000)).toEqual(0.15);
  });   
});
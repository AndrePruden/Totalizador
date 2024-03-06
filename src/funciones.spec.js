import funs from "./funciones.js";

describe("Deberia sumar dos numeros", () => {
  it("Deberia sumar dos numeros", () => {
    expect(funs.sumar(5, 2)).toEqual(7);
  });
});

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

describe("Obtener Precio Total", () => {
  it("Deberia obtener 63.75 de precio total para un precio neto de 60 en el estado de TX", () => {
    expect(funs.getTotal("Antiguo",60, "TX")).toEqual(63.75);
  });   
});

describe("Obtener Precio Total", () => {
  it("Deberia obtener 1052.5 de precio total para un precio neto de 1000 en el estado de CA", () => {
    expect(funs.getTotal("Antiguo",1000, "CA")).toEqual(1052.5);
  });   
});

describe("Obtener Impuesto de Categoria", () => {
  it("Deberia obtener 0 de impuesto para la categoria Varios", () => {
    expect(funs.impuestoCat("Varios")).toEqual(0);
  });   
});

describe("Obtener Impuesto de Categoria", () => {
  it("Deberia obtener 0.02 de impuesto para la categoria Vestimenta", () => {
    expect(funs.impuestoCat("Vestimenta")).toEqual(0.02);
  });   
});

describe("Obtener Impuesto de Categoria", () => {
  it("Deberia obtener 0.04 de impuesto para la categoria Electrónicos", () => {
    expect(funs.impuestoCat("Electronicos")).toEqual(0.04);
  });   
});

describe("Obtener Impuesto de Categoria", () => {
  it("Deberia obtener 0.03 de impuesto para la categoria Muebles", () => {
    expect(funs.impuestoCat("Muebles")).toEqual(0.03);
  });   
});

describe("Obtener Impuesto de Categoria", () => {
  it("Deberia obtener 0 de impuesto para la categoria Material de Escritorio", () => {
    expect(funs.impuestoCat("Material")).toEqual(0);
  });   
});

describe("Obtener Impuesto de Categoria", () => {
  it("Deberia obtener 0.07 de impuesto para la categoria Bebidas Alcohólicas", () => {
    expect(funs.impuestoCat("Bebidas")).toEqual(0.07);
  });   
});

describe("Obtener Impuesto de Categoria", () => {
  it("Deberia obtener 0 de impuesto para la categoria Alimentos", () => {
    expect(funs.impuestoCat("Alimentos")).toEqual(0);
  });   
});

describe("Obtener Descuento de Categoria", () => {
  it("Deberia obtener 0.02 de descuento para la categoria Alimentos", () => {
    expect(funs.descuentoCat("Alimentos")).toEqual(0.02);
  });   
});

describe("Obtener Descuento de Categoria", () => {
  it("Deberia obtener 0 de descuento para la categoria Bebidas Alcohólicas", () => {
    expect(funs.descuentoCat("Bebidas")).toEqual(0);
  });   
});

describe("Obtener Descuento de Categoria", () => {
  it("Deberia obtener 0.015 de descuento para la categoria Material de Escritorio", () => {
    expect(funs.descuentoCat("Material")).toEqual(0.015)
  });   
});

describe("Obtener Descuento de Categoria", () => {
  it("Deberia obtener 0 de descuento para la categoria Muebles", () => {
    expect(funs.descuentoCat("Muebles")).toEqual(0)
  });   
});

describe("Obtener Descuento de Categoria", () => {
  it("Deberia obtener 0.01 de descuento para la categoria Electrónicos", () => {
    expect(funs.descuentoCat("Electronicos")).toEqual(0.01)
  });   
});

describe("Obtener Descuento de Categoria", () => {
  it("Deberia obtener 0 de descuento para la categoria Vestimenta", () => {
    expect(funs.descuentoCat("Vestimenta")).toEqual(0)
  });   
});

describe("Obtener Descuento de Categoria", () => {
  it("Deberia obtener 0 de descuento para la categoria Varios", () => {
    expect(funs.descuentoCat("Varios")).toEqual(0)
  });   
});

describe("Obtener Costo de Envio", () => {
  it("Deberia obtener 0 de costo para un peso entre 0-10", () => {
    expect(funs.costoEnvio(5)).toEqual(0)
  });   
});

describe("Obtener Costo de Envio", () => {
  it("Deberia obtener 3.5 de costo para un peso entre 11-20", () => {
    expect(funs.costoEnvio(14)).toEqual(3.5)
  });   
});

describe("Obtener Costo de Envio", () => {
  it("Deberia obtener 5 de costo para un peso entre 21-40", () => {
    expect(funs.costoEnvio(37)).toEqual(5)
  });   
});

describe("Obtener Costo de Envio", () => {
  it("Deberia obtener 6 de costo para un peso entre 41-80", () => {
    expect(funs.costoEnvio(74)).toEqual(6)
  });   
});

describe("Obtener Costo de Envio", () => {
  it("Deberia obtener 6.5 de costo para un peso entre 81-100", () => {
    expect(funs.costoEnvio(100)).toEqual(6.5)
  });   
});

describe("Obtener Costo de Envio", () => {
  it("Deberia obtener 8 de costo para un peso entre 101-200", () => {
    expect(funs.costoEnvio(150)).toEqual(8)
  });   
});

describe("Obtener Costo de Envio", () => {
  it("Deberia obtener 9 de costo para un peso mayor a 200", () => {
    expect(funs.costoEnvio(300)).toEqual(9)
  });   
});

describe("Obtener Descuento de Envio Segun Tipo de Cliente", () => {
  it("Deberia obtener 0 de descuento para el tipo de cliente Normal", () => {
    expect(funs.descuentoEnvio("Normal")).toEqual(0)
  });   
});

describe("Obtener Descuento de Envio Segun Tipo de Cliente", () => {
  it("Deberia obtener 0.005 de descuento para el tipo de cliente Recurrente", () => {
    expect(funs.descuentoEnvio("Recurrente")).toEqual(0.005)
  });   
});

describe("Obtener Descuento de Envio Segun Tipo de Cliente", () => {
  it("Deberia obtener 0.01 de descuento para el tipo de cliente Antiguo Recurrente", () => {
    expect(funs.descuentoEnvio("Antiguo")).toEqual(0.01)
  });   
});

describe("Obtener Descuento de Envio Segun Tipo de Cliente", () => {
  it("Deberia obtener 0.015 de descuento para el tipo de cliente Especial", () => {
    expect(funs.descuentoEnvio("Especial")).toEqual(0.015)
  });   
});

describe("Obtener Descuento para el tipo de cliete, precio neto, categoria", () => {
  it("Deberia obtener Descuento de 100$ para el tipo=Recurrente, Precio Neto>3000, Categoria=Alimentos", () => {
    expect(funs.descuentoEspecial("Recurrente", 5000, "Alimentos")).toEqual(100)
  });   
});

describe("Obtener Descuento para el tipo de cliete, precio neto, categoria", () => {
  it("Deberia obtener Descuento de 200$ para el tipo=Especial, Precio Neto>7000, Categoria=Electronicas", () => {
    expect(funs.descuentoEspecial("Especial", 8000, "Electronicos")).toEqual(200)
  });   
});

describe("Obtener Descuento para el tipo de cliete, precio neto, categoria", () => {
  it("Deberia obtener Descuento de 200$ para el tipo=Especial, Precio Neto>7000, Categoria=Electronicas", () => {
    expect(funs.descuentoEspecial("Especial", 8000, "Bebidas")).toEqual(0)
  });   
});
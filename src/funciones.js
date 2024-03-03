function precio_neto(cantidad, precio) {
    return cantidad * precio;
  }

function impuesto(estado){
    switch (estado) {
        case "UT":
          return 0.0665;
        case "NV":
            return 0.08;
        case "TX":
            return 0.0625;
        case "AL":
            return 0.04;
        case "CA":
            return 0.0825;
    }
}

function descuento(precioNeto){
    if(precioNeto >= 1000 && precioNeto < 3000)
        return 0.03
    if(precioNeto >= 3000 && precioNeto < 7000)
        return 0.05
    if(precioNeto >= 7000 && precioNeto < 10000)
        return 0.07
    if(precioNeto >= 10000 && precioNeto < 30000)
        return 0.1
    if(precioNeto >= 30000)
        return 0.15
    return 0
}

function impuestoCat(categoria){
    switch (categoria) {
        case "Varios":
          return 0;
        case "Muebles":
            return 0.03;
        case "Material":
            return 0;
        case "Bebidas":
            return 0.07;
        case "Alimentos":
            return 0;
        case "Electronicos":
            return 0.04;
        case "Vestimenta":
            return 0.02;
    }
}

function getTotal(precioNeto, estado){
    const descuento = funs.descuento(precioNeto)*precioNeto
    const impuesto = funs.impuesto(estado)*precioNeto
    return precioNeto + impuesto - descuento
}

const funs = {
    precio_neto: precio_neto,
    impuesto: impuesto,
    descuento: descuento,
    getTotal: getTotal,
    impuestoCat: impuestoCat
};

export default funs;
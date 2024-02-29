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

const funs = {
    precio_neto: precio_neto,
    impuesto: impuesto
};

export default funs;
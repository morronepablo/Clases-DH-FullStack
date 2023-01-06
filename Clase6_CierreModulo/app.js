var autosImportados = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
        const auto = this.autos.find(function(auto) {
            if(auto.patente == patente) {
                return auto
            }
        });
        if(auto == null) {
            return null;
        } else {
            return auto;
        }
    },
    venderAuto: function (patente) {
        const auto = this.buscarAuto(patente);
        if(auto != null) {
            auto.vendido = true;
        }
        return auto;
    },
    autosParaLaVenta: function() {
        return this.autos.filter(function(auto) {
            return auto.vendido == false;
        })
    },
    autosNuevos: function () {
        const autosParaVenta = this.autosParaLaVenta()
        const autosNuevo = autosParaVenta.filter((auto) => auto.km < 100);
        return autosNuevo;
    },
    listaDeVentas: function () {
        let vendidos = [];
        vendidos = this.autos.filter(function(auto) {
            return auto.vendido == true;
        })
        let precios = vendidos.map((auto) => auto.precio);
        return precios;
    },
    totalDeVentas: function () {
        const totalVentas = this.listaDeVentas()
        .reduce((acumulador, precio) => precio + acumulador, 0)
        return totalVentas;
    },
    puedeComprar: function (auto, persona) {
        if(persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas)){
            return true;
        } else {
            return false;
        }
    },
    autosQuePuedeComprar: function (persona) {
        let autosParaLaVenta = this.autosParaLaVenta();
        return autosParaLaVenta.filter((auto) => this.puedeComprar(auto, persona) === true);
    }
};

console.log('--------------------- Lista Autos -------------------------');
console.log(concesionaria.autos);
console.log('--------------------- Buscar Auto -------------------------');
console.log(concesionaria.buscarAuto('JJK116'));
console.log('--------------------- Vender Auto -------------------------');
console.log(concesionaria.venderAuto('APL123'));
console.log('--------------------- Autos para la venta -----------------');
console.log(concesionaria.autosParaLaVenta());
console.log('--------------------- Autos nuevos ------------------------');
console.log(concesionaria.autosNuevos());
console.log('--------------------- Lista de venta ----------------------');
console.log(concesionaria.listaDeVentas());
console.log('--------------------- Total de ventas ---------------------');
console.log(concesionaria.totalDeVentas());
console.log('--------------------- Puede Comprar -----------------------');
console.log(concesionaria.puedeComprar({
    "marca": "Ford",
    "modelo": "Fiesta",
    "precio": 150000,
    "km": 200,
    "color": "Azul",
    "cuotas": 12,
    "anio": 2019,
    "patente": "APL123",
    "vendido": false
}, {
    "nombre": "Juan",
    "capacidadDePagoEnCuotas": 20000,
    "capacidadDePagoTotal": 200000
}));
console.log('--------------------- Autos que Puede Comprar -----------------------');
console.log(concesionaria.autosQuePuedeComprar({
    "nombre": "Juan",
    "capacidadDePagoEnCuotas": 20000,
    "capacidadDePagoTotal": 200000
}));

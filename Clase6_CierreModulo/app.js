var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    // buscarAuto: function (patente) {
    //     const busqueda = autos.find(auto => auto.patente == patente);
    //     if(busqueda != null) {
    //         return busqueda;
    //     } else {
    //         return null;
    //     }
    // },
    buscarAuto: function (patente) {
        const auto = autos.find(function(auto) {
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
        // busqueda = this.autos.map(function(dato) {
        //     if(dato.patente == patente){
        //         dato.vendido = true;
        //     }
        //     return dato;
        // })
        const auto = this.buscarAuto(patente);
        if(auto != null) {
            auto.vendido = true;
        }
        return auto;
    },
    autosParaLaVenta: function () {
        // filtrado = autos.filter((pirulo) => pirulo.vendido == false);
        // return filtrado;
        const autoVenta = autos.filter(function(auto) {
            if(auto.vendido == false){
                return true
            }else {
                return false
            }
        })
        return autoVenta
    },
    autosNuevos: function () {
        const autosParaVenta = this.autosParaLaVenta()
        const autosNuevo = autosParaVenta.filter((auto) => auto.km < 100);
        return autosNuevo;
    },
    listaDeVentas: function () {
        const arrPrecios = [];
        autos.forEach(auto =>{
            if(auto.vendido === true){
                arrPrecios.push(auto.precio)
            }
        })
        return arrPrecios
    },
    totalDeVentas: function () {
        const totalVentas = this.listaDeVentas().reduce((acumulador, item) => item + acumulador, 0)
        return totalVentas
    },
    puedeComprar: function (auto, persona) {
        if(persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas)){
            return true;
        } else {
            return false;
        }
    },
    autosQuePuedeComprar: function (persona) {
        const autosParaVenta = this.autosParaLaVenta();
        let arrPuedeComprar = [];
        autosParaVenta.forEach(auto => {
            if(this.puedeComprar(auto, persona)) {
                arrPuedeComprar.push(auto);
            }
        });
        return arrPuedeComprar;
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

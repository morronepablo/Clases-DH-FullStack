// *** MODULO 2 *** //
// Clase 3 Introducccion a Node Js

// 1) Importar modulos
const moduloNativo = require('http');
const moduloInstalado = require('axios');
const moduloPropio = require('./miFuncion');
// 2) Exportar modulos
let arrayDePeliculas  = ["Harry Potter","Her", "Up", "Lego"];
module.exports = arrayDePeliculas;

// Clase 4 Repaso de funciones, condicionales y arrays

// Clase 4 Variables
// 1) Declarando variables
var edad;
var peso;
// 2) Asignando valores a las variables
var edad = 49;
var peso = 60;
// 3) La diferencia entre var y let
let nombre;
let apellido;
let edad;
let telefono;
let sabeProgramar;
// 4) Las constantes
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
// Clase 4 Tipo de datos
// 5) Una variable de cada tipo
let verdadero = true;
let nada = null;
let texto = 'hola';
let numero = 123;
// 6) Usando Number()
let positivo = Number('24');
let negativo = Number('-10');
let decimal = Number('0.25');
// 7) Usando parseInt()
const nan = parseInt('hola');
const correcto = parseInt('120.50');
// Clase 4 Operadores
// 8) Operando
var primerNumero = 12;
var segundoNumero = 2;
var resultadoSuma = primerNumero + segundoNumero;
var resultadoResta = primerNumero - segundoNumero;
var resultadoMultiplicacion = primerNumero * segundoNumero;
var resultadoDivision = primerNumero / segundoNumero;
// Clase 4 funciones
// 9) Declarar funciones
function ejemplo () {
    return "hola, soy una función";
}
// 10) Declarando funciones en variables
var ejemplo = function () {
    return "hola, soy una función expresada";
}
// 11) Funciones con parámetros
function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}
// 12) Números pares
function esPar(n) {
    return (n % 2 == 0);
}
// 13) Declarando tres funciones
function anterior(n)  {
    return n - 1
}
function triple(n) {
    return n * 3
}
function anteriorDelTriple(n) {
    //return (n * 3) - 1;
    return anterior(triple(n));
}
//Clase 4 Condicionales
// 14) Mi primer if
var dato = true;
if(dato) {
    console.log("es true");
} else {
    console.log("es false");
}
// 15) igualdad, if y else
let lenguaje = "javascript";
if(lenguaje == "javascript") {
    console.log("Estoy aprendiendo");
} else {
    console.log("Lo aprenderé más adelante");
}
// 16) ¿Puede pasar cosme fulanito?
function puedePasar(nombre) {
    if(nombre == "Cosme Fulanito") {
        return false;
    } else {
        return true;
    }
}
// Clase 4 Métodos de arrays
// 17) indexOf
let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]
let indiceJuan = alumnos.indexOf("Juan");
let indiceFrancisco = alumnos.indexOf("Francisco");
// 18) Join
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva);
  // 19) Pop
  let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  let alumnoEgresado = estudiantes.pop();
  // 20) Push
  let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  estudiantes.push({
      nombre: 'Juan',
      promedio : 5,
      curso : 'iOS',
    });
  estudiantes.push({
      nombre: 'Miguel',
      promedio : 2,
      curso : 'Android',
    })
// 21) shift
let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]

let alumnoDeBaja = estudiantes.shift();
// 22) unshift
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  estudiantes.unshift({
      nombre: 'Mariana',
      promedio : 9,
      curso : 'Full Stack',
    });
  estudiantes.unshift( {
      nombre: 'Francisco',
      promedio : 2,
      curso : 'Android',
    });

// Clase 5 JSON, más condicionales y ciclos

// Clase 5 Métodos de strings
// 1) Completar URL
function dominio(frase) {
    return "http://www." + frase;
}
// 2) Contar los caracteres
let texto = "Hola como estas ?";

console.log(texto.length);
// 3) Reemplazo fast fast
function reemplazoFastFast(texto, palabra, reemplazo) {
    let frase = texto.replace(palabra, reemplazo);
    return frase;
}
console.log(reemplazoFastFast('Este texto es mala onda','mala','buena'));
// 4) ¿Están hablando de mí?
function menciona(texto, palabra) {
    let busqueda = texto.indexOf(palabra);
    return (busqueda >= 0);
}
  
console.log(menciona("Existen muchos lenguajes de programación y JavaScript es uno de ellos", "programación"))
// 5) Solo el nombre
let frase = 'Hola!, soy Carli';
let busqueda = frase.indexOf('Carli');
let licenciada = frase.slice(busqueda);
console.log(licenciada);

// Clase 5 Objetos literales
// 6) Crear un objeto literal
let perro = {
    "nombre": "Pandita",
    "edad": 1,
    "vacunado": true
}
// 7) Utilizando los métodos de los objetos
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas) {
    this.energia = this.energia - (horas * 5);
    this.experiencia = this.experiencia + (horas * 2);
    return horas;
  }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
console.log(deportista.entrenarHoras(5) + " Horas");
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

// Clase 5 Arrow functions
// 8) Convertir a arrow function
let dameCinco = () => [1,2,3,4,5];
let multiplicarPorDos = numero => 123 * 2;
let mostrarNombre = () => "Mi nombre es Hernán";
// 9) Arrow function con parámetro
let saludar = nombre => 'Hola, ' + nombre + '!';
// 10) Ahora probemos con más de uno
let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

// Clase 5 Condicionales
// 11) Fin de semana
let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}

function finDeSemana (dia) {	
	switch (dia) {
		case 'viernes':
			console.log('buen finde');
			break;
		case 'lunes':
			console.log('buena semana');
			break;
		default:
			console.log('buen dia');
			break;
	}
}
// 12) Tengo clases
function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log("tenés clases")
			break;
		default:
			console.log("no tenés clases")
	}
}
// 13) Practicando el if ternario
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA : bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

// Clase 5 Ciclos:repaso del for
// 14) Repetir como un loro
function loro(texto) {
    for(let i=1; i<=5; i++) {
        console.log(texto);
    }
}
// 15) Contar impares
function noParesDeContarImparesHasta(numero){
    let acumulador = 0;
    for(let i=0; i<=numero; i++) {
      if(i % 2 > 0 || i % 2 < 0){
        acumulador += 1; // acumulador = acumulador + 1
      }
    }
    return acumulador;
}
console.log(noParesDeContarImparesHasta(4));

// Clase 6 Callbacks, más ciclos y nuevos métodos

// Clase 6 Callbacks
// 1) Pasar un callback
let doble = numero => numero * 2;
let triple = numero => numero * 3;
let aplicarCallback  = (numero, funcion) => funcion(numero);

aplicarCallback (2, doble);
// 2) Hagamos una calculadora
let suma = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion  = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(18, 6, suma));
// 3) Pasar un callback reloaded
function agregarHttp(url) {
    return 'http://'+url;
}
function procesar(array,callback){
    let newArray=[];
    for (let i=0;i<array.length;i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}
procesar(["www.google.com", "www.yahoo.com"], agregarHttp);

let urlCompletas = procesar(['www.google.com','www.yahoo.com'],agregarHttp)
console.log(urlCompletas);

// Clase 6 Métodos de arrays II
// 4) Filter con números
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante) {
    return estudiante.aprobado == true;
})

let desaprobados = estudiantes.filter(function(estudiante) {
    return estudiante.aprobado == false;
})

console.log(aprobados);
// 5) map ()
let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(function(hora) {
    return hora -1;
})
// 6) reduce()
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce(function(acumula, vuelta) {
    return acumula + vuelta;
})
// 7) forEach
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach(function(lista){
    console.log(lista);
})

// Clase 6 Objeto Date
// 8) Date
console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+fecha.getDate()+' del mes '+fecha.getMonth()+' del año '+fecha.getFullYear())

// Clase 6 Destructuring
// 9) Destructuring
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [, bariloche,,china] = destinosDelMundo;
// 10) Destructurando objetos
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,  color} = auto;

// Cierre de modulos

// 1) ¡Al fin es momento de codear!
var autos = [
  {
      "marca": "Ford",
      "modelo": "Fiesta",
      "precio": 150000,
      "km": 200,
      "color": "Azul",
      "cuotas": 12,
      "anio": 2019,
      "patente": "APL123",
      "vendido": false
  },
  {
      "marca": "Toyota",
      "modelo": "Corolla",
      "precio": 100000,
      "km": 0,
      "color": "Blanco",
      "cuotas": 14,
      "anio": 2019,
      "patente": "JJK116",
      "vendido": false
  }
]

module.exports = autos;

// 2) Etapa 1
const autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    /* completar */
   autos: autos
};

// 3) Etapa 2
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
   }
};

// 4) Etapa 3
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        busqueda = this.buscarAuto(patente);
        busqueda.vendido = true;
        return busqueda;
    }
};

// 5) Funcionalidad extra
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        busqueda = this.buscarAuto(patente);
        busqueda.vendido = true;
        return busqueda;
    },
    autosParaLaVenta: function () {
        filtrado = this.autos.filter((auto) => auto.vendido == false);
        return filtrado;
    }
};

// 6) Una nueva funcionalidad extra
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        busqueda = this.buscarAuto(patente);
        busqueda.vendido = true;
        return busqueda;
    },
    autosParaLaVenta: function () {
        filtrado = this.autos.filter((auto) => auto.vendido == false);
        return filtrado;
    },
    autosNuevos: function () {
        autosParaVenta = this.autosParaLaVenta()
        filtrado = autosParaVenta.filter((auto) => auto.km < 100);
        return filtrado;
    }
};

// 7) Más funcionalidades
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        busqueda = this.buscarAuto(patente);
        busqueda.vendido = true;
        return busqueda;
    },
    autosParaLaVenta: function () {
        filtrado = this.autos.filter((auto) => auto.vendido == false);
        return filtrado;
    },
    autosNuevos: function () {
        autosParaVenta = this.autosParaLaVenta()
        filtrado = autosParaVenta.filter((auto) => auto.km < 100);
        return filtrado;
    },
    listaDeVentas: function () {
        arrPrecios= []
        autos.forEach(auto =>{
            if(auto.vendido === true){
                precios = auto.precio
                arrPrecios.push(precios)
            }
        })
        return arrPrecios;
    }
};

// 8) Total de ventas
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        busqueda = this.buscarAuto(patente);
        busqueda.vendido = true;
        return busqueda;
    },
    autosParaLaVenta: function () {
        filtrado = this.autos.filter((auto) => auto.vendido == false);
        return filtrado;
    },
    autosNuevos: function () {
        autosParaVenta = this.autosParaLaVenta()
        filtrado = autosParaVenta.filter((auto) => auto.km < 100);
        return filtrado;
    },
    listaDeVentas: function () {
        arrPrecios= []
        autos.forEach(auto =>{
            if(auto.vendido === true){
                precios = auto.precio
                arrPrecios.push(precios)
            }
        })
        return arrPrecios

    },
    totalDeVentas: function () {
        totalVentas = this.listaDeVentas().reduce((acc, item) => item + acc, 0)
        return totalVentas
    }
};

// 9) Agregando funcionalidades
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        busqueda = this.buscarAuto(patente);
        busqueda.vendido = true;
        return busqueda;
    },
    autosParaLaVenta: function () {

        filtrado = autos.filter(function(auto) {
            if(auto.vendido == false){
                return true
            }else {
                return false
            }
        })
        return filtrado
    },
    autosNuevos: function () {
        autosParaVenta = this.autosParaLaVenta()
        filtrado = autosParaVenta.filter((auto) => auto.km < 100);
        return filtrado;
    },
    listaDeVentas: function () {
        arrPrecios= []
        autos.forEach(auto =>{
            if(auto.vendido === true){
                precios = auto.precio
                arrPrecios.push(precios)
            }
        })
        return arrPrecios
    },
    totalDeVentas: function () {
        totalVentas = this.listaDeVentas().reduce((acumulador, item) => item + acumulador, 0)
        return totalVentas
    },
    puedeComprar: function (auto, persona) {
        if(persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas)){
            return true;
        } else {
            return false;
        }
    }
};

// 10) Agregando funcionalidades
var autos = require('./autos.js');/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente) {
        busqueda = autos.find(auto => auto.patente == patente);
        if(busqueda != null) {
            return busqueda;
        } else {
            return null;
        }
    },
    venderAuto: function (patente) {
        busqueda = this.buscarAuto(patente);
        busqueda.vendido = true;
        return busqueda;
    },
    autosParaLaVenta: function () {
        filtrado = autos.filter(function(auto) {
            if(auto.vendido == false){
                return true
            }else {
                return false
            }
        })
        return filtrado
    },
    autosNuevos: function () {
        autosParaVenta = this.autosParaLaVenta()
        filtrado = autosParaVenta.filter((auto) => auto.km < 100);
        return filtrado;
    },
    listaDeVentas: function () {
        arrPrecios= []
        autos.forEach(auto =>{
            if(auto.vendido === true){
                precios = auto.precio
                arrPrecios.push(precios)
            }
        })
        return arrPrecios
    },
    totalDeVentas: function () {
        totalVentas = this.listaDeVentas().reduce((acumulador, item) => item + acumulador, 0)
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
        arrPuedeComprar = [];
        autosParaVenta.forEach(auto => {
            if(persona.capacidadDePagoTotal > auto.precio && persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas)){
                arrPuedeComprar.push({
                    "marca": auto.marca,
                    "modelo": auto.modelo,
                    "precio": auto.precio,
                    "km": auto.km,
                    "color": auto.color,
                    "cuotas": auto.cuotas,
                    "anio": auto.anio,
                    "patente": auto.patente,
                    "vendido": auto.vendido,
                    "comprar": true});
            } else {
                arrPuedeComprar.push({
                    "marca": auto.marca,
                    "modelo": auto.modelo,
                    "precio": auto.precio,
                    "km": auto.km,
                    "color": auto.color,
                    "cuotas": auto.cuotas,
                    "anio": auto.anio,
                    "patente": auto.patente,
                    "vendido": auto.vendido,
                    "comprar": false});
            }
        })
        const puedeComprar = arrPuedeComprar.filter((auto) => auto.comprar == true);
        return puedeComprar
    }
};



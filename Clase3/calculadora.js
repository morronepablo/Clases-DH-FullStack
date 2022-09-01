let sumar = require('./sumar.js');
let restar = require('./restar.js');
let multiplicar = require('./multiplicar.js');
let dividir = require('./dividir.js');
function calculadora(operacion, numero1, numero2) {
    switch (operacion) {
        case 'SUMA':
        case 'suma':
        case 'Suma':
            return operacion + ' : ' + numero1 + ' + ' + numero2 + ' = ' + sumar(numero1, numero2);
            break;
        case 'RESTA':
        case 'resta':
        case 'Resta':
            return operacion + ' : ' + numero1 + ' - ' + numero2 + ' = ' + restar(numero1, numero2);
            break;
        case 'MULTIPLICACION':
        case 'multiplicacion':
        case 'Multiplicacion':
            return operacion + ' : ' + numero1 + ' x ' + numero2 + ' = ' + multiplicar(numero1, numero2);
            break;
        case 'DIVISION':
        case 'division':
        case 'Division':
            return operacion + ' : ' + numero1 + ' / ' + numero2 + ' = ' + dividir(numero1, numero2);
            break;
        default:
            return "Error : operación ( " + operacion + " ) mal escrita o no corresponde (SUMA/RESTA/MULTIPLICACION/DIVISION)";
            break;
    }
}

// console.log(calculadora('suma', '9', '9'));
// console.log(calculadora('suma', null, '9'));
// console.log(calculadora('SUMA', '9'));
// console.log(calculadora('Suma', 'ww', '9'));
console.log(calculadora('SUMA', 3, 5));
console.log(calculadora('RESTA', 10, 7));
console.log(calculadora('Multiplicacion', 12, 6));
// console.log(calculadora('MULTIPLICACION', 12));
console.log(calculadora('DIVISION', 25, 5));
// console.log(calculadora('division', 10, 0));
console.log(calculadora('hola', 6, 9));
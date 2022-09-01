function multiplicar(numero1, numero2) {
    var resultado;
    // if(numero1 == null) {
    //     numero1 = 0;
    // } 
    // if (numero2 == null) {
    //     numero2 = 0;
    // }
    // if(typeof(numero1) == 'string') {
    //     numero1 = parseInt(numero1);
    // } 
    // if (typeof(numero2) == 'string') {
    //     numero2 = parseInt(numero2);
    // }
    // if(typeof(numero1) !== 'number') {
    //     if(typeof(numero1) !== 'string') {
    //         if(numero1 !== null) {
    //             resultado = "Error: dato ingresado no es un numero, ni un string, tampoco nulo";
    //         }
    //     }
    // }
    // if(typeof(numero2) !== 'number') {
    //     if(typeof(numero2) !== 'string') {
    //         if(numero2 !== null) {
    //             resultado = "Error: dato ingresado no es un numero, ni un string, tampoco nulo";
    //         }
    //     }
    // }
    // if(isNaN(numero1)) {
    //     resultado = "Error: no se pudo convertir en número";
    //     return resultado;
    // } 
    // if(isNaN(numero2)) {
    //     resultado = "Error: no se pudo convertir en número";
    //     return resultado;
    // }
    resultado = numero1 * numero2;
    return resultado;
}

module.exports = multiplicar;
function probandoArray(unArray){
    if (unArray.length > 3){
        unArray.pop()
    } else {
        unArray.unshift("Agregamos uno")
    }
    return unArray
}
console.log(probandoArray(["hola", 2, 3, true, "cuatro"]));
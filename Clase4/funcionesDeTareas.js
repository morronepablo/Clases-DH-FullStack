const fs = require('fs');

function listar() {
    const tareas = fs.readFileSync('./tareas.json', 'utf-8');
    const arrayTareas = JSON.parse(tareas);
    console.log();
    console.log('Listado de tareas');
    console.log('-----------------');
    console.log();
    arrayTareas.forEach((tarea,index) => console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`));
}

module.exports = listar;
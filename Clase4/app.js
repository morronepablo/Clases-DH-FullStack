const tareas = require('./funcionesDeTareas.js');
const accion = process.argv[2]

switch (accion) {
    case 'listar':
        tareas();
        break;
    case undefined:
        console.log("Atención: - Tienes que pasar una acción");
        console.log("Las acciones disponibles son: listar");
        console.log("----------------------------------------");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
        console.log("Las acciones disponibles son: listar");
        console.log("----------------------------------------");
        
}

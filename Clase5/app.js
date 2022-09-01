const { log } = require('console');
const funcionesDeTareas = require('./funcionesDeTareas');

const accion = process.argv[2];

switch(accion) {

    case 'listar':
        console.log();
        console.log('Listado de tareas');
        console.log('-----------------');
        console.log();
        //Micro desafío 1
        //Modificar la funcionalidad de listar tareas. Deberemos utilizar el método forEach.
        const tareas = funcionesDeTareas.leerJSON();
        tareas.forEach((tarea,index) => console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`));
        break;

    case 'crear':
        // Micro desafío 2 - c
        // -------------------
        // Escribir el caso de crear tarea
        // Tener en cuenta que va a llegar el nombre de la tarea como segundo argumento
        // Tener en cuenta que la tarea se crea en esto "pendiente"
        console.log();    
        console.log('Nueva tarea creada');
        console.log('------------------');
        const tituloNuevo = process.argv[3];
        const nuevaTarea = { 
            titulo: tituloNuevo, 
            estado: 'pendiente' 
        };
        console.log();
        console.log('Agregando tarea: ', nuevaTarea.titulo);
        funcionesDeTareas.guardarTarea(nuevaTarea);
        break;
    
    case 'filtrar':
        // Micro desafío 3
        console.log('Filtrado por : ' + process.argv[3]);
        console.log('---------------------------------');
        console.log('');
        const estado = process.argv[3];
        const filtradas = funcionesDeTareas.filtrarPorEstado(estado);
        filtradas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`);
        });
        break;
    case undefined:
        console.log('Atención - Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué querés hacer');

}

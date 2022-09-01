const fs = require('fs');

const archivoTareas = {

    file: 'tareas.json',
    leerJSON: function() {
        const fileTareas = fs.readFileSync(this.file, 'utf-8');
        return JSON.parse(fileTareas);
    },
    // Micro desafío 2-a
    //Dentro de nuestro archivo funcionesDeTareas.js(en nuestro caso funcionesArchivos.js), vamos a crear una función llamada escribirJSON.
    escribirJSON: function(tareas) {
        const tarea = JSON.stringify(tareas, null, ' ');
        fs.writeFileSync(this.file, tarea);
    },
    // Micro desafío 2-b - Escribir la tarea en el archivo JSON
    guardarTarea: function(nuevaTarea) {
        // Leer las tareas actuales
        let tareas = this.leerJSON();
        // Agregar nueva tarea
        tareas.push(nuevaTarea);
        // Reescribir nuevamente el archivo json
        this.escribirJSON(tareas);
    },
    // Micro desafío 3, aplicar filter para traer solo las tareas pendientes
    filtrarPorEstado: function (estado) {
        const tareas = this.leerJSON();
        return tareas.filter(tarea => tarea.estado === estado);
    }
}

module.exports = archivoTareas;
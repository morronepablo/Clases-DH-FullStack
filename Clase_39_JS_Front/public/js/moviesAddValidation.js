//Otra forma de validar el formulario - MSc. Ángel Daniel Fuentes
// window.onload = function () {
//     let titulo = document.querySelector('.moviesAddTitulo')
//     let formulario = document.querySelector('#formulario');
//     let article = document.querySelector('article');
//     titulo.innerHTML = 'AGREGAR PELÍCULA';
//     titulo.classList.add('titulo');
//     article.classList.add('fondoTransparente');
//     formulario.classList.add('fondoCRUD');

//     //Desde aqui incio la validación del formulario
//     //Capturo el formulario
//     let form = document.querySelector('.form');
//     //Posiciono al usuario dentro del campo Titulo
//     form.title.focus();
//     //Capturo todos los inputs del formulario
//     const inputs = document.querySelectorAll('#formulario input');

//     //Aquí hago que todos los campos sean falsos, para controlar cuando todo este validado, ya que de ser así, todos los campos serian true
//     const campos = {
//         title: false,
//         rating: false,
//         awards: false,
//         release_date: false,
//         length: false,
//     }
//     //Esta es la función reponsable de determinar que campo se va a validar y de esa forma se invola  a la funcipon encargada de efectuar dicha validación, se le pasa como parámetros el input y el nombre del campo
//     const validarFormulario = (e) => {
//         switch (e.target.name) {
//             case "title":
//                 validarTitle(e.target, 'title');
//                 break;
//             case "rating":
//                 validarRating(e.target, 'rating');
//                 break;
//             case "awards":
//                 validarAwards(e.target, 'awards');
//                 break;
//             case "release_date":
//                 validarReleaseDate(e.target, 'release_date');
//                 break;
//             case "length":
//                 validarLength(e.target, 'length');
//                 break;
//             case "genre_id":
//                 validarGenre(e.target, 'genre_id');
//                 break;
//         }
//     }
//     //Aquí es donde desarrollo cada una de las funciones que realizarían las validaciones
//     //Función que ejecuta las validaciones del titulo
//     const validarTitle = (input, campo) => {
//         if (title.value === '') {
//             document.getElementById('formulario__mensaje').innerHTML = '';
//             let errorTitle = document.getElementById('errorTitle')
//             errorTitle.innerHTML = `El campo ${campo} no puede estar vacío`;
//             errorTitle.style.color = 'red';
//             title.classList.add('is-invalid');
//             campos[campo] = false;
//         } else if (title.value.length < 4) {
//             document.getElementById('formulario__mensaje').innerHTML = '';
//             let errorTitle = document.getElementById('errorTitle')
//             errorTitle.innerHTML = `El campo ${campo} no puede poseer menos de 4 caracteres`;
//             errorTitle.style.color = 'red';
//             title.classList.add('is-invalid');
//             campos[campo] = false;
//         } else {
//             errorTitle.innerHTML = '';
//             title.classList.add('is-valid');
//             title.classList.remove('is-invalid');
//             //form.rating.focus();
//             campos[campo] = true;
//             console.log(campos.campo);
//         };
//     }
//     //Función que valida el rating 
//     const validarRating = (input, campo) => {
//         if (rating.value <= 0 || rating.value > 10) {
//             document.getElementById('formulario__mensaje').innerHTML = '';
//             let errorRating = document.getElementById('errorRating')
//             errorRating.innerHTML = `El campo ${campo} no puede ser menor a 0 ni mayor a 10`;
//             errorRating.style.color = 'red';
//             rating.classList.add('is-invalid');
//             campos[campo] = false;
//         } else {
//             errorRating.innerHTML = '';
//             rating.classList.add('is-valid');
//             rating.classList.remove('is-invalid');
//             //form.rating.focus();
//             campos[campo] = true;
//         };
//     }

//     //Aquí ejecuto un foreach con la intencipon de llamar a la función que valida los campos del formulario, el llamado se ejecutará cada vez que el usuario levanta una tecla o intente dejar el campo
//     inputs.forEach((input) => {
//         input.addEventListener('keyup', validarFormulario);
//         input.addEventListener('blur', validarFormulario);
//     });

//     //esta sección es la que se encarga de validar que realmente todos los campos validados esten correctos y de ser así todos deben estar con el valor boleano true, si todo esta bien aparece un mensaje indicandole al usuario que las validaciones estan correctas y se envia el formulario.
//     formulario.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const genre_id = document.getElementById('genre_id');

//         //if (campos.title && campos.rating && campos.awards && campos.release_date && campos.length && genre_id.checked) {*/
//         console.log(campos.title,campos.rating );
//         if (campos.title && campos.rating ) {

//             alert('La validación fué exitosa')
//             //form.reset();
//             form.submit();

//         } else {
//             document.getElementById('formulario__mensaje').innerHTML = "<p style='color:white;background-color:tomato'><strong>Error:</strong> Por favor complete el formulario correctamente. </p>"
//         }
//     });

// }


window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    console.log("estoy aqui");

//------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    let form = document.querySelector('.form');
    form.title.focus();

    
    form.addEventListener('submit', (e) => {
        
        let errors = [];

        let title = document.querySelector('#title');
        let rating = document.querySelector('#rating');
        let awards = document.querySelector('#awards');
        let release_date = document.querySelector('#release_date');
        let length = document.querySelector('#length');
        let genre_id = document.querySelector('#genre_id');

        // title
        if (title.value == '') {
            errors.push('El campo titulo no puede estar vacío');
            title.classList.add('is-invalid');
        } else {
            title.classList.add('is-valid');
            title.classList.remove('is-invalid');
            form.rating.focus();
        };

        // rating
        if (rating.value <= 0 || rating.value > 10.0) {
            errors.push('El campo calificación no puede ser menor a cero ni mayor a 10');
            rating.classList.add('is-invalid');
        } else {
            rating.classList.add('is-valid');
            rating.classList.remove('is-invalid');
            form.awards.focus();
        };

        // awards
        if (awards.value <= 0 || awards.value > 10) {
            errors.push('El campo premios no puede ser menor a cero ni mayor a 10');
            awards.classList.add('is-invalid');
        } else {
            awards.classList.add('is-valid');
            awards.classList.remove('is-invalid');
            form.release_date.focus();
        };

        // release_date
        if (release_date.value == "") {
            errors.push('El campo fecha de creación no puede estar vacio');
            release_date.classList.add('is-invalid');
        } else {
            release_date.classList.add('is-valid');
            release_date.classList.remove('is-invalid');
            form.length.focus();
        };

        // length
        if (length.value < 60 || length.value > 360) {
            errors.push('El campo duración no puede ser menor a 60 ni mayor a 360 minutos');
            length.classList.add('is-invalid');
        } else {
            length.classList.add('is-valid');
            length.classList.remove('is-invalid');
            form.genre_id.focus();
        };

        // genre_id
        if (genre_id.value == '') {
            errors.push('El campo género no puede estar vacío');
            genre_id.classList.add('is-invalid');
        } else {
            genre_id.classList.add('is-valid');
            genre_id.classList.remove('is-invalid');
        };
        
        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        }else{
            alert('La validación fué exitosa')
            form.submit();
        }

    });

}
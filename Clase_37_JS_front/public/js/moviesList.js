window.onload = function() {
    let selectBody = document.querySelector('body');
    let selectH1   = document.querySelector('h1');
    
    var opcion = confirm("Desea modo oscuro ?");
    if (opcion) {
        document.querySelector('body').style.background = '#7f7f7f';
        document.querySelector('body').classList.add('fondoMoviesList');
    }
    selectH1.innerText = 'LISTADO DE PELÍCULAS';
    selectH1.style.color = 'white';
    selectH1.style.background = 'teal';
    selectH1.style.padding = '20px';
};
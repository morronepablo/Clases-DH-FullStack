window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitulo = document.querySelector('input');

    let estadoSecreto = 0;

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    titulo.addEventListener('mouseover', () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        titulo.style.color = '#'+ randomColor;
    })

    inputTitulo.addEventListener('keypress', (e) => {

        switch (estadoSecreto) {
            case 0:
                if(e.key == 's'){
                    estadoSecreto = 1;
                }
            break;
            case 1:
                if(e.key == 'e') {
                    estadoSecreto = 2;
                } else {
                    estadoSecreto = 0;
                }
            break;
            case 2:
                if(e.key == 'c') {
                    estadoSecreto = 3;
                } else {
                    estadoSecreto = 0;
                }
            break;
            case 3:
                if(e.key == 'r') {
                    estadoSecreto = 4;
                } else {
                    estadoSecreto = 0;
                }
            break;
            case 4:
                if(e.key == 'e') {
                    estadoSecreto = 5;
                } else {
                    estadoSecreto = 0;
                }
            break;
            case 5:
                if(e.key == 't') {
                    estadoSecreto = 6;
                } else {
                    estadoSecreto = 0;
                }
            break;
            case 6:
                if(e.key == 'o') {
                    alert('Secreto Mágico !!!!');
                    estadoSecreto = 0;
                } else {
                    estadoSecreto = 0;
                }
            break;
            default:
                estadoSecreto = 0;
        }

        console.log(estadoSecreto);
    })

}
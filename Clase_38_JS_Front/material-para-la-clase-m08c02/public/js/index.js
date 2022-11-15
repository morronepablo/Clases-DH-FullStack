window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');

    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }

    menu.addEventListener('mouseout', () => {
        menu.classList.remove('mostrar');
    })
    
    container.style.display = 'block';
    
    //Microdesafio 1 a)
    let logoDH = document.querySelector('.logoDH');
    let menu = document.getElementById('menu');
    logoDH.addEventListener('click', () => {
        menu.classList.toggle('mostrar');
    })
    //Microdesafio 2 b)
    logoDH.addEventListener('mouseleave', () => {
        menu.classList.toggle('mostrar');
    })
    // Trabajando con el circulo
    let movimiento = 50;
    let margenIzquierdo = 0;

    let circulo = document.getElementById('circulo');
    document.addEventListener('keydown', (e) => {
        let key = e.key;
        if(key == 'ArrowRight' && margenIzquierdo < 1200) {
            moverDerecha();
        }
        if(key == 'ArrowLeft' && margenIzquierdo > 0) {
            moverIzquierda();
        }
    });

    //funciones que utiliza mi aplicación 
    function moverDerecha() {
        margenIzquierdo = margenIzquierdo + movimento;
        circulo.style.marginLeft = margenIzquierdo+'px'
    }

    function moverIzquierda(){
        margenIzquierdo = margenIzquierdo - movimiento;
        circulo.style.marginLeft = margenIzquierdo+'px';  
    }

}
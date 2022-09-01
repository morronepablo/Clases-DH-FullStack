let selectMain = document.querySelector('main');
let selectH2   = document.querySelector('h2');
let selectA    = document.querySelector('a');
let selectP    = document.querySelectorAll('p');
let nombre     = prompt('Ingrese su nombre ');
console.log(nombre);
if(nombre == null || nombre == ''){
    selectH2.innerText += 'Invitado';
} else {
    selectH2.innerText += ' ' + nombre;
}
selectH2.style.textTransform = 'uppercase';
selectA.style.color = '#E51B3E';
var opcion = confirm("Desea cambiar el fondo de pantalla ?");
if (opcion) {
    document.querySelector('body').classList.add('fondo')
}
for (let i = 0; i < selectP.length; i++) {
    if((i+1)%2 == 0){
        selectP[i].classList.add('destacadoPar');
    }else {
        selectP[i].classList.add('destacadoImpar');
    }
}

document.querySelector('main').style.display = 'block';
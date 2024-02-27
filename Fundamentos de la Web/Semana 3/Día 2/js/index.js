console.log("¡Conectado debidamente!");

let titulo = document.querySelector('h1');
console.log(titulo.innerText);

let busqueda = document.querySelector('#busqueda');
busqueda.value = "Alex";
console.log(busqueda.value);

let boton = document.querySelector('.btn');
console.log(boton.closest('.nav-links'));

let navegacion = document.querySelector('.nav');
console.log(navegacion.innerHTML);

boton.remove();

let tarjetas = document.querySelectorAll('.card-header');

for(let i = 0; i < tarjetas.length; i ++){
    tarjetas[i].classList.add('extra');
}
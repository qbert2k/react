// Variable y Constantes

const nombre = 'Javier';
const apellido = 'Rojas';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// 'var' no se debe de usar...
if (true) {
    const nombre = 'Peter';
    console.log(nombre);

    let valorDado = 6;
    console.log(valorDado);
}

console.log(nombre);
console.log(valorDado);
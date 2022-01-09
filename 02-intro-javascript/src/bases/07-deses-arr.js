const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log(p3);

const returnaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnaArreglo();
console.log(letras, numeros)

// Tarea
// 1. El primer valor del arr se llamara nombre
// 2. se llamara setNombre
const usarState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo')
    }];
}

const [nombre, setNombre] = usarState('Goku');

console.log(nombre);
setNombre();
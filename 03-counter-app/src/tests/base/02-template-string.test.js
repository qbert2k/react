import {getSaludo} from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar Hola Javier!', () => {
        const nombre = 'Javier';

        const saludo = getSaludo(nombre);

        console.log(saludo);

        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {
        const saludo = getSaludo();

        console.log(saludo);

        expect(saludo).toBe('Hola Carlos!');
    })
});
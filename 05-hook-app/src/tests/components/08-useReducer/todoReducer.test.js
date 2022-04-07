import todoReducer from '../../../components/08-useReducer/todoReducer';
import {demoTodos} from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un TODO', () => {
        const type = 'add';
        const payload = {
            id: 3,
            desc: ' Aprender Python',
            done: false
        };
        const action = {type, payload};

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(demoTodos.length + 1);
        expect(state).toEqual([...demoTodos, payload]);
    });
});
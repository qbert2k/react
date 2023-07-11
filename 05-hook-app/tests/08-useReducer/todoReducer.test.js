import {todoReducer} from '../../src/08-useReducer/todoReducer.js';

describe('Test todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('Should return the initial state', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
        expect(newState).toEqual(initialState);
    });

    test('Should add a todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'New todo',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Should delete a todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
    });

    test('Should update a todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState1 = todoReducer(initialState, action);

        expect(newState1.length).toBe(1);
        expect(newState1[0].done).toBeTruthy();

        const newState2 = todoReducer(newState1, action);

        expect(newState2[0].done).toBeFalsy();
    });
});
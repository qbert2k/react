import {authReducer, types} from '../../../src/auth';

describe('Test authReducer', () => {

    test('Should return the default state', () => {
        const state = authReducer({logged: false}, {});

        expect(state).toEqual({logged: false});
    });

    test('Should call login and authenticate the user', () => {
        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Juan'
            }
        };

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('Should call logout and unauthenticate the user', () => {
        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Juan'
            }
        };

        const action = {
            type: types.logout
        };

        const newState = authReducer(state, action);

        expect(newState).toEqual({logged: false});
    });
});
import {authSlice, checkingCredentials, login, logout} from '../../../src/store/auth/authSlice';
import {authenticatedState, demoUser, initialState, notAuthenticatedState} from '../../fixtures/authFixtures';

describe('Test authSlice', () => {

    test('Should return the initial state', () => {
        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
    });

    test('Should authenticate', () => {
        const state = authSlice.reducer(initialState, login(demoUser));

        expect(state).toEqual(authenticatedState);
    });

    test('Should logout no arguments', () => {
        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual(notAuthenticatedState);
    });

    test('Should logout and show an error message', () => {
        const errorMessage = 'Error message!!!';
        const state = authSlice.reducer(authenticatedState, logout({errorMessage}));

        expect(state).toEqual({
            ...notAuthenticatedState,
            errorMessage
        });
    });

    test('Should change the state to checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(state.status).toBe('checking');
    });
});
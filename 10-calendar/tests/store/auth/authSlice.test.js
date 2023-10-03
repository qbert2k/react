import {authSlice, onChecking, onClearErrorMessage, onLogin, onLogout} from '../../../src/store';
import {authenticatedState, initialState, unauthenticatedState} from '../../fixtures/authStates';
import {testUser} from '../../fixtures/testUser';

describe('Test authSlice', () => {

    test('should return the initial state', () => {
        expect(authSlice.getInitialState()).toEqual(initialState);
    });

    test('should login', () => {
        const state = authSlice.reducer(initialState, onLogin(testUser));

        expect(state).toEqual(authenticatedState);
    });

    test('should log out', () => {
        const state = authSlice.reducer(authenticatedState, onLogout());

        expect(state).toEqual(unauthenticatedState);
    });

    test('should log out with error message', () => {
        const errorMessage = 'Invalid credentials';

        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

        expect(state).toEqual({
            ...unauthenticatedState,
            errorMessage
        });
    });

    test('should clear the error message', () => {
        const errorMessage = 'Invalid credentials';
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));

        const newState = authSlice.reducer(state, onClearErrorMessage());

        expect(newState.errorMessage).toBe(undefined);
    });

    test('should checking', () => {
        const state = authSlice.reducer(initialState, onLogin(testUser));

        const newState = authSlice.reducer(state, onChecking());

        expect(newState).toEqual(initialState);
    });
});
import {authSlice} from '../../../src/store/auth/authSlice';
import {initialState} from '../../fixtures/authFixtures';

describe('Test authSlice', () => {

    test('Should return the initial state', () => {
        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);
    });
});
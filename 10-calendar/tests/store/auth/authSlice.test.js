import {authSlice} from '../../../src/store';
import {initialState} from '../../fixtures/authStates';

describe('Test authSlice', () => {

    test('should return the initial state', () => {
        expect(authSlice.getInitialState()).toEqual(initialState);
    });
});
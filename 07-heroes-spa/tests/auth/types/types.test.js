import {types} from '../../../src/auth';

describe('Test types', () => {

    test('Should return the types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    });
});
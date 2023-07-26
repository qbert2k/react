import {checkingAuthentication, startGoogleSignIn} from '../../../src/store/auth/thunks';
import {checkingCredentials, login, logout} from '../../../src/store/auth/authSlice';
import {demoUser} from '../../fixtures/authFixtures';
import {signInWithGoogle} from '../../../src/firebase/providers';

jest.mock('../../../src/firebase/providers');

describe('Test thunk', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should call checking credentials', async () => {

        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    })

    test('Should call checkingCredentials and login - Happy Path', async () => {
        const loginData = {ok: true, ...demoUser};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('Should call checkingCredentials and login - Error Message', async () => {
        const loginData = {ok: false, errorMessage: 'Error Message!!!'};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });
});
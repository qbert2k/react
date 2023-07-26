import {
    checkingAuthentication,
    startGoogleSignIn,
    startLoginWithEmailPassword,
    startLogout
} from '../../../src/store/auth/thunks';
import {checkingCredentials, login, logout} from '../../../src/store/auth/authSlice';
import {demoUser} from '../../fixtures/authFixtures';
import {loginWithEmailPassword, logoutFirebase, signInWithGoogle} from '../../../src/firebase/providers';
import {clearNotesLogout} from "../../../src/store/journal/journalSlice";

jest.mock('../../../src/firebase/providers');

describe('Test Auth thunk', () => {

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

    test('Should call checkingCredentials and login - Happy Path', async () => {
        const loginData = {ok: true, ...demoUser};
        const formData = {email: demoUser.email, password: '123456'};
        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test('Should call logoutFirebase, clearNotes and logout', async () => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
    })
});
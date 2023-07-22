import {checkingCredentials, login, logout} from './';
import {registerUserWithEmailPassword, signInWithGoogle} from '../../firebase/providers';

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displyName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const resp = await registerUserWithEmailPassword({email, password, displyName});
        console.log(resp);
    }
}
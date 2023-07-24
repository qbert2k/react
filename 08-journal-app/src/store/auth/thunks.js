import {checkingCredentials, login, logout} from './';
import {loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle} from '../../firebase/providers';

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

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, protoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if (!ok) return dispatch(logout(errorMessage));

        dispatch(login({uid, displayName, email, protoURL}));
    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, protoURL, errorMessage} = await loginWithEmailPassword({email, password});

        if (!ok) return dispatch(logout(errorMessage));

        dispatch(login({uid, displayName, email, protoURL}));
    }
}
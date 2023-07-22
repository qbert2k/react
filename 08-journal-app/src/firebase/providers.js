import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth';
import {FirebaseAuth} from './config.js';

const credential = new GoogleAuthProvider();

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        console.log(resp);

        // Todo update display name in firebase

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            errorMessage: error.message
        }
    }
}
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzpiurfhqTWxS162vZ1YaXA2C6Gl1w5Gs",
    authDomain: "react-tutorial-12101.firebaseapp.com",
    projectId: "react-tutorial-12101",
    storageBucket: "react-tutorial-12101.appspot.com",
    messagingSenderId: "845004634918",
    appId: "1:845004634918:web:3dede836348a67040f1fe7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
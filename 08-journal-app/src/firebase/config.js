// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
import {getEnvironments} from "../helpers/index.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();
console.log(env);

// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
// Dev / Prod
// const firebaseConfig = {
//     apiKey: "AIzaSyAzpiurfhqTWxS162vZ1YaXA2C6Gl1w5Gs",
//     authDomain: "react-tutorial-12101.firebaseapp.com",
//     projectId: "react-tutorial-12101",
//     storageBucket: "react-tutorial-12101.appspot.com",
//     messagingSenderId: "845004634918",
//     appId: "1:845004634918:web:3dede836348a67040f1fe7"
// };

// Testing
const firebaseConfig = {
    apiKey: "AIzaSyBELBXte6JBQzk3P4rtc86iyFOneU7CuTw",
    authDomain: "react-tutorial-test-156f0.firebaseapp.com",
    projectId: "react-tutorial-test-156f0",
    storageBucket: "react-tutorial-test-156f0.appspot.com",
    messagingSenderId: "909835949212",
    appId: "1:909835949212:web:b865136d2f248a03818959"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
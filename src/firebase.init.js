// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK45N83_K90jBSaNb_LwAUGVDeLBhclvc",
    authDomain: "ema-john-simple-a4eaa.firebaseapp.com",
    projectId: "ema-john-simple-a4eaa",
    storageBucket: "ema-john-simple-a4eaa.appspot.com",
    messagingSenderId: "819312340272",
    appId: "1:819312340272:web:ab2653a6574ceb0b086cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
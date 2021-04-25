import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBP_eVCQWe2lUvNCOa49qrotiUpHcmw3dk",
    authDomain: "fir-login-c13ed.firebaseapp.com",
    projectId: "fir-login-c13ed",
    storageBucket: "fir-login-c13ed.appspot.com",
    messagingSenderId: "94390468429",
    appId: "1:94390468429:web:eb4a8cce7bbbfe55954104",
    measurementId: "G-TYX1XZF1H7"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
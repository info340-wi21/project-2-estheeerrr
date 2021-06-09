import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB2JzdVStUNcdPM3-ljjjH2l7wJsKP2n_U",
    authDomain: "playerviewer-dee10.firebaseapp.com",
    projectId: "playerviewer-dee10",
    storageBucket: "playerviewer-dee10.appspot.com",
    messagingSenderId: "538739918279",
    appId: "1:538739918279:web:5d393b26e0641e810305e2",
    measurementId: "G-GXN1Z1EXBX"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();
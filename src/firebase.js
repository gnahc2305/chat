import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

const app = firebase.initializeApp({
    apiKey: "AIzaSyB1gM4oQRoLCZwFruLjt-P75paB1zZ695o",
    authDomain: "chat-8ebe9.firebaseapp.com",
    projectId: "chat-8ebe9",
    storageBucket: "chat-8ebe9.appspot.com",
    messagingSenderId: "289048823284",
    appId: "1:289048823284:web:a064b27076f2e5385325a1",
    measurementId: "G-7RB0P62C16"
})

export const auth = app.auth();
export const firestore = firebase.firestore();
export default app;
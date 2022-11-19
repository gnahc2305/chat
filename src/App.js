import ChatRoom from "./components/ChatRoom";
// import SignIn from "./components/SignIn";
import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; 

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1gM4oQRoLCZwFruLjt-P75paB1zZ695o",
  authDomain: "chat-8ebe9.firebaseapp.com",
  projectId: "chat-8ebe9",
  storageBucket: "chat-8ebe9.appspot.com",
  messagingSenderId: "289048823284",
  appId: "1:289048823284:web:a064b27076f2e5385325a1",
  measurementId: "G-7RB0P62C16"
};

// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig)
const analytics = getAnalytics(app);

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* <section>{user ? <ChatRoom /> : <SignIn />}</section> */}
    </div>
  );
}

export default App;

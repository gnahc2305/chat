import React, { useRef, useState } from 'react';
import './App.css';

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from './components/SignOut'

import {app, auth} from "./firebase";

// import firebase from 'firebase/compat/app'; 
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth'; 

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// const app = firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

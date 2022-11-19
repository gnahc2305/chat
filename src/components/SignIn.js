import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();    
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export default SignIn;

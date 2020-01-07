import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB03e_o4QWB9w7aqB7m2_x11Cw2hRCOyCY",
    authDomain: "smart-clothing-db.firebaseapp.com",
    databaseURL: "https://smart-clothing-db.firebaseio.com",
    projectId: "smart-clothing-db",
    storageBucket: "smart-clothing-db.appspot.com",
    messagingSenderId: "236269384007",
    appId: "1:236269384007:web:c1706ca86158cf419f5c62",
    measurementId: "G-TSQGHMB075"
  };

  // Initialize Firebase
  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
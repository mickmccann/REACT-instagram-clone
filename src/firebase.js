// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPwcH80pI-lkXYEcnuNDfdkDevJUQFysA",
  authDomain: "instagram-clone-fba16.firebaseapp.com",
  projectId: "instagram-clone-fba16",
  storageBucket: "instagram-clone-fba16.appspot.com",
  messagingSenderId: "450791250342",
  appId: "1:450791250342:web:f064cf667ef3f36256d767",
  measurementId: "G-02LDY7EHT9"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
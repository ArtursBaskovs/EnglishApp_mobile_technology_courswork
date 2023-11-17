//import * as firebase from 'firebase/app';

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const configuration = {
    apiKey: "AIzaSyAWwO-y0UcgoURFhz2D7cEAbu50O5HFp7w",
    authDomain: "englishappdb-3c633.firebaseapp.com",
    projectId: "englishappdb-3c633",
    storageBucket: "englishappdb-3c633.appspot.com",
    messagingSenderId: "132672064717",
    appId: "1:132672064717:web:18ad7c8e387e6079af6d84"
}
const firebaseApp = firebase.initializeApp(configuration);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {
  auth,
  provider,
  storage
};

export default db;
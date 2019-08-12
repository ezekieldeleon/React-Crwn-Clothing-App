import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDu4u81dPIymAtWV7J3jUUFavh6eLxMtIs",
  authDomain: "crwn-db-1bfe9.firebaseapp.com",
  databaseURL: "https://crwn-db-1bfe9.firebaseio.com",
  projectId: "crwn-db-1bfe9",
  storageBucket: "",
  messagingSenderId: "47720663523",
  appId: "1:47720663523:web:980ced8e14f309a6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
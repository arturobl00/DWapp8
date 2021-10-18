//Import de la libreria
import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyfR3Cl13RtT7P901ORA8JOF6vXpJlWSs",
  authDomain: "crudreact-9462a.firebaseapp.com",
  projectId: "crudreact-9462a",
  storageBucket: "crudreact-9462a.appspot.com",
  messagingSenderId: "125727015229",
  appId: "1:125727015229:web:f47b5b8cf00a11d88c4554"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}

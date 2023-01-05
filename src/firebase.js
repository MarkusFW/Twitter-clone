import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCe_FRpzL4id9M8TMKQcWGBR_uJ3kupnkY",
  authDomain: "twitter-clone-app-1cd52.firebaseapp.com",
  projectId: "twitter-clone-app-1cd52",
  storageBucket: "twitter-clone-app-1cd52.appspot.com",
  messagingSenderId: "1079550680362",
  appId: "1:1079550680362:web:117ea20a197f3c5918d253",
  measurementId: "G-GHJXE2V4C3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

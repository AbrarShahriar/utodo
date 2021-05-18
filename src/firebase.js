import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHS3UMILMHkn1WT4lfQSaBCvzWnBcZgCw",
  authDomain: "thought-md.firebaseapp.com",
  projectId: "thought-md",
  storageBucket: "thought-md.appspot.com",
  messagingSenderId: "609635195079",
  appId: "1:609635195079:web:d04d838d290ba723fa06e2",
  measurementId: "G-SSW2C4T27F"
};

const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider }
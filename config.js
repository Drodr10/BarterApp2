import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDs8-ngTX5FxJeRfnt3hgPyiA1cT8Efjcw",
    authDomain: "book-santa-510f7.firebaseapp.com",
    projectId: "book-santa-510f7",
    storageBucket: "book-santa-510f7.appspot.com",
    messagingSenderId: "75713976095",
    appId: "1:75713976095:web:005c764fc14d2d1e49822a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

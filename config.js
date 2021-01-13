  import * as firebase from 'firebase';
  require('@firebase/firestore');

  var firebaseConfig = {
    apiKey: "AIzaSyD7yfH2WUL7BYF1yV3RvXRrYCZaAu6CPEs",
    authDomain: "wireleibrarymanager.firebaseapp.com",
    projectId: "wireleibrarymanager",
    storageBucket: "wireleibrarymanager.appspot.com",
    messagingSenderId: "401988001646",
    appId: "1:401988001646:web:60cf7b8410c0e1d62d6b7f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
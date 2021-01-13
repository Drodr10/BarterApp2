import * as firebase from "firebase";
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyCtq_qnFps7Jr2gWuR1K7SwOvEta-TQibo",
    authDomain: "barterapp-5473b.firebaseapp.com",
    projectId: "barterapp-5473b",
    storageBucket: "barterapp-5473b.appspot.com",
    messagingSenderId: "209992722883",
    appId: "1:209992722883:web:4addb547a3179cfd957576"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

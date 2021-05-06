import * as firebase from 'firebase'
require('@firebase/firestore')

 var firebaseConfig = {
   apiKey: "AIzaSyCxTS_-mHta__BXx_3gafvt4R0KrUMGrVE",
   authDomain: "storyhub-cf709.firebaseapp.com",
   projectId: "storyhub-cf709",
   storageBucket: "storyhub-cf709.appspot.com",
   messagingSenderId: "92249872759",
   appId: "1:92249872759:web:522f6918ffb0b7ee546972",
 };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

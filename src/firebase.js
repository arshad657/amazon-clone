import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDZHe68FMHueqAv0jF3dy4Q_Rz_U76o9_M",
    authDomain: "clone-4f31a.firebaseapp.com",
    databaseURL: "https://clone-4f31a.firebaseio.com",
    projectId: "clone-4f31a",
    storageBucket: "clone-4f31a.appspot.com",
    messagingSenderId: "70865508327",
    appId: "1:70865508327:web:23c0a47539546266a8cf42",
    measurementId: "G-4RNHQ2JZE5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth};
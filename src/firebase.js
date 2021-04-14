// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD7to2BWh2RiXuzNeCXXBQrCxDExk_cJgQ",
    authDomain: "fir-90b80.firebaseapp.com",
    projectId: "fir-90b80",
    storageBucket: "fir-90b80.appspot.com",
    messagingSenderId: "96507022588",
    appId: "1:96507022588:web:dac2136105e7e8939fdb79",
    measurementId: "G-0ZEC10L86N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
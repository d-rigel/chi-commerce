import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBomMEJcgpWc9GKgPEKxyIEd3xW2v2wPrY",
    authDomain: "chi-wigs.firebaseapp.com",
    projectId: "chi-wigs",
    storageBucket: "chi-wigs.appspot.com",
    messagingSenderId: "388290458320",
    appId: "1:388290458320:web:5a9f48d4b06a5d3dbc64d5",
    measurementId: "G-17PJ5CGKGT"

  })

//   const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export { auth };
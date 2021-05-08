import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQWxM4XLfKdxlBZqICR4BayF-PXpCEX0U",
    authDomain: "reactsocialmediaproject.firebaseapp.com",
    projectId: "reactsocialmediaproject",
    storageBucket: "reactsocialmediaproject.appspot.com",
    messagingSenderId: "633535024097",
    appId: "1:633535024097:web:b97c17deaf3394178220a0",
    measurementId: "G-QP8C4WQH5W"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();


export default db;
export {auth,provider};
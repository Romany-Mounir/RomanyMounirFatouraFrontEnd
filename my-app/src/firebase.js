import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnZnUx_BzFNlyKDfF8T6oFHVInZDhCTvg",
  authDomain: "codenames-dc114.firebaseapp.com",
  projectId: "codenames-dc114",
  storageBucket: "codenames-dc114.appspot.com",
  messagingSenderId: "410262287253",
  appId: "1:410262287253:web:a2976b61085d6c485b7c9c",
  measurementId: "G-44BRF1JGF4"
});



const db = firebaseApp.firestore();
export  {db};
// export default firebaseApp;
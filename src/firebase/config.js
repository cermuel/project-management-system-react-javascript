// Import the functions you need from the SDKs you need

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAY5Rznv4XjzThRHM8XJ5diZbNzMzlU44",
  authDomain: "pmsd-9002b.firebaseapp.com",
  projectId: "pmsd-9002b",
  storageBucket: "pmsd-9002b.appspot.com",
  messagingSenderId: "134666717255",
  appId: "1:134666717255:web:efec4c2137a0ceca9f8962",
  measurementId: "G-7QVWY1SHVJ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
const projectAuth = firebase.auth(app);
const projectFirestore = firebase.firestore(app);
const projectStorage = firebase.storage(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export { projectAuth, projectFirestore, projectStorage, timestamp };

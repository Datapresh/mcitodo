// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnUtqykVSiazYjGG0e8Idnlc7qoxhSgBQ",
  authDomain: "mcitodo-623cc.firebaseapp.com",
  projectId: "mcitodo-623cc",
  storageBucket: "mcitodo-623cc.appspot.com",
  messagingSenderId: "629074297160",
  appId: "1:629074297160:web:ee46c277875e0cc419737d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};
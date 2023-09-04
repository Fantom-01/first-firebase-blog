// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjOu9YSQ5yvFxfpLwiZwTW9QqlKCelpX4",
  authDomain: "first-firebase-blog-bece8.firebaseapp.com",
  projectId: "first-firebase-blog-bece8",
  storageBucket: "first-firebase-blog-bece8.appspot.com",
  messagingSenderId: "141020161327",
  appId: "1:141020161327:web:718e44b4daf4b83d5d2dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
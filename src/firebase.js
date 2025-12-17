// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhPhYLeHlzBajbkz3GKozmZr5F7XsEZvc",
  authDomain: "chatportafolio-7ac36.firebaseapp.com",
  projectId: "chatportafolio-7ac36",
  storageBucket: "chatportafolio-7ac36.firebasestorage.app",
  messagingSenderId: "702731770438",
  appId: "1:702731770438:web:89bc2a29c92edbf1470847",
  measurementId: "G-1LWR6MD20K"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);

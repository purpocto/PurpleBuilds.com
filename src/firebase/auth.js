// /src/firebase/auth.js

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// ⛓ Firebase config — uses your existing environment setup
const firebaseConfig = {
    apiKey: "AIzaSyDfTRLZ7JXV-N1DD0eazj64ByPfjp6HR7w",
    authDomain: "purplebuilds-56e2e.firebaseapp.com",
    projectId: "purplebuilds-56e2e",
    storageBucket: "purplebuilds-56e2e.firebasestorage.app",
    messagingSenderId: "276161430333",
    appId: "1:276161430333:web:53a7f1160dc4dd53c77b54",
    measurementId: "G-WJLZNWBQYE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exported auth functions
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export { auth };

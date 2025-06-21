// /src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDfTRLZ7JXV-N1DD0eazj64ByPfjp6HR7w",
  authDomain: "purplebuilds-56e2e.firebaseapp.com",
  projectId: "purplebuilds-56e2e",
  storageBucket: "purplebuilds-56e2e.firebasestorage.app",
  messagingSenderId: "276161430333",
  appId: "1:276161430333:web:53a7f1160dc4dd53c77b54",
  measurementId: "G-WJLZNWBQYE"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// /src/services/auth.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/auth";

// Wraps Firebase auth signup
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

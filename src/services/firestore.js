// /src/services/firestore.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

/**
 * Save a submission to Firestore under 'intakeForms'
 * Includes userId for associating to dashboard later
 */
export const saveSubmission = async (formData, userId) => {
  const docRef = await addDoc(collection(db, "intakeForms"), {
    ...formData,
    userId,
    createdAt: serverTimestamp(),
    status: "submitted", // optional field for later admin use
  });

  return docRef.id;
};

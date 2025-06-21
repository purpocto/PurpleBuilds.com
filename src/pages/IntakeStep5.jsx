// /src/pages/IntakeStep5.jsx
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../services/firestore";
import { auth } from "../firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FormContext } from "../services/FormContext";
import { sendConfirmationEmail, sendAdminSummaryEmail } from "../services/email";

export default function IntakeStep5() {
  const navigate = useNavigate();
  const { formData } = useContext(FormContext);
  const [submitting, setSubmitting] = useState(false);
  const [userId, setUserId] = useState(null);

  // Grab userId after auth initializes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserId(user?.uid || null);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const submission = {
        ...formData,
        userId,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "intakeForms"), submission);
      await sendConfirmationEmail(formData);
      await sendAdminSummaryEmail(formData);

      alert("Submission successful!");
      navigate("/");
    } catch (err) {
      console.error("Submission error:", err);
      alert("There was a problem sending your submission.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-terminalBg text-crtGreen font-pixel p-6">
      <div className="max-w-xl mx-auto border border-crtGreen p-6 shadow-glow rounded-md">
        <h1 className="text-2xl mb-6">✅ Step 5: Review & Submit</h1>

        <div className="space-y-3 text-sm mb-6 font-mono">
          <p><b>Name:</b> {formData.name}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Business:</b> {formData.business}</p>
          <p><b>Project Type:</b> {formData.projectType}</p>
          <p><b>Features:</b> <span className="text-green-400">{formData.features?.join(", ")}</span></p>
          <p><b>Notes:</b> <span className="text-green-400">{formData.notes}</span></p>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => navigate("/intake/step-4")}
            className="px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-terminalBg transition-all font-mono rounded shadow-glow"
          >
            ⬅ Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting || !userId}
            className="px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-terminalBg transition-all font-mono rounded shadow-glow"
          >
            {submitting ? "Submitting..." : "✅ Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IntakeContext } from "../context/IntakeContext";
import { sendConfirmationEmail, sendAdminSummaryEmail } from "../services/email";
import { saveSubmission } from "../services/firestore";
import { getAuth } from "firebase/auth";

export default function IntakeStep5() {
  const { formData } = useContext(IntakeContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser || !currentUser.uid) {
      alert("You must be logged in to submit a project.");
      return;
    }

    const submissionData = {
      userId: currentUser.uid,
      name: formData.name || "",
      email: formData.email || "",
      business: formData.business || "",
      projectType: formData.projectType || "",
      selectedFeatures: formData.features || [],
      additionalNotes: formData.notes || "",
      createdAt: new Date().toISOString()
    };

    try {
      setLoading(true);
     await saveSubmission(submissionData, currentUser.uid);
      await sendConfirmationEmail(submissionData);
      await sendAdminSummaryEmail(submissionData);
      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Submission failed:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/purplebuildsFIN.jpg"
            alt="Review Illustration"
            className="w-full max-w-[280px] h-auto"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-green-600 mb-4">✅ Review & Submit</h2>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Project Type:</strong> {formData.projectType || "N/A"}</p>
            <p><strong>Name:</strong> {formData.name || "N/A"}</p>
            <p><strong>Email:</strong> {formData.email || "N/A"}</p>
            <p><strong>Business:</strong> {formData.business || "N/A"}</p>
            <p><strong>Features:</strong> {(formData.features || []).join(", ") || "N/A"}</p>
            <p><strong>Additional Notes:</strong> {formData.notes || "N/A"}</p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Project 🚀"}
          </button>
        </div>
      </div>
    </div>
  );
}

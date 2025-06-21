// /src/pages/IntakeStep4.jsx
import { useNavigate } from "react-router-dom";
import { useIntake } from "../context/IntakeContext";
import { useEffect, useState } from "react";

export default function IntakeStep4() {
  const navigate = useNavigate();
  const { formData, setFormData } = useIntake();
  const [notes, setNotes] = useState(formData.notes || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    setFormData({ ...formData, notes });
    navigate("/intake/step-5");
  };

  const handleBack = () => {
    navigate("/intake/step-3");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6 py-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Illustration */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/purplebuildsHOME.jpg"
            alt="Additional Notes Illustration"
            className="w-full max-w-[280px] h-auto"
          />
        </div>

        {/* Right Form Panel */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🗒️ Additional Notes</h2>
          <p className="text-gray-700 mb-4">
            Anything else we should know? Share important context, goals, links, or requirements.
          </p>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={6}
            placeholder="Add extra details here..."
            className="w-full p-3 border border-gray-300 rounded resize-none text-gray-800 mb-6"
          />

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-white border border-purple-700 text-purple-700 py-2 px-4 rounded hover:bg-purple-100 transition"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

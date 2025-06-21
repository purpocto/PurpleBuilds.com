// /src/pages/Intake.jsx
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../services/FormContext";

export default function Intake() {
  const navigate = useNavigate();
  const { updateFormData } = useFormContext();

  const handleSelect = (projectType) => {
    updateFormData({ projectType });
    navigate("/intake/step-2");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center p-6 font-sans">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/illustration.png"
            alt="PurpleBuilds Logo"
            className="w-full max-w-[300px] h-auto"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            📁 Step 1: What are we building?
          </h1>
          <p className="text-gray-600 mb-6">
            Choose the kind of project you'd like us to work on:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {["App", "Website", "Software"].map((type) => (
              <button
                key={type}
                onClick={() => handleSelect(type)}
                className="w-full py-3 border border-purple-700 text-purple-700 rounded hover:bg-purple-700 hover:text-white transition"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

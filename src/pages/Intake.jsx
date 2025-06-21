// /src/pages/Intake.jsx
import { useNavigate } from "react-router-dom";
import { useIntake } from "../context/IntakeContext";

export default function Intake() {
  const navigate = useNavigate();
  const { formData, setFormData } = useIntake();

  const handleStart = () => {
    if (!formData.type) return alert("Please select a project type.");
    navigate("/intake/step-2");
  };

  const handleSelect = (value) => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Illustration Panel */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/purplebuildsINTAKE.jpg"
            alt="Project Intake Illustration"
            className="w-full max-w-[280px] h-auto"
          />
        </div>

        {/* Right Content Panel */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">📝 Project Intake</h1>
          <p className="text-gray-700 mb-6">
            Let’s get started building something great! This form will help us understand your project requirements.
          </p>

          <label className="text-sm font-medium mb-2 text-gray-800">What type of project is this?</label>
          <select
            value={formData.type}
            onChange={(e) => handleSelect(e.target.value)}
            className="mb-6 p-2 border rounded w-full"
          >
            <option value="">-- Select One --</option>
            <option value="App">App</option>
            <option value="Website">Website</option>
            <option value="Software">Software</option>
          </select>

          <button
            onClick={handleStart}
            className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded transition"
          >
            🚀 Start Form
          </button>
        </div>
      </div>
    </div>
  );
}

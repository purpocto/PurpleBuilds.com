// /src/pages/IntakeStep3.jsx
import { useNavigate } from "react-router-dom";
import { useIntake } from "../context/IntakeContext";
import { useState, useEffect } from "react";

const featureOptions = [
  "User Authentication",
  "Admin Panel",
  "Dashboard",
  "File Uploads",
  "Payment Integration",
  "Live Chat",
  "Email Notifications",
  "API Integrations",
];

export default function IntakeStep3() {
  const navigate = useNavigate();
  const { formData, setFormData } = useIntake();
  const [selectedFeatures, setSelectedFeatures] = useState(formData.features || []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleNext = () => {
    setFormData({ ...formData, features: selectedFeatures });
    navigate("/intake/step-4");
  };

  const handleBack = () => {
    navigate("/intake/step-2");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6 py-10">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Illustration */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/illustration.png"
            alt="Feature Selection Illustration"
            className="w-full max-w-[280px] h-auto"
          />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠 Feature Requirements</h2>
          <p className="text-gray-700 mb-4">
            Select any features you'd like us to include in your build:
          </p>

          <div className="grid grid-cols-1 gap-3 mb-6">
            {featureOptions.map((feature) => (
              <label key={feature} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="accent-purple-700"
                />
                <span className="text-gray-800">{feature}</span>
              </label>
            ))}
          </div>

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

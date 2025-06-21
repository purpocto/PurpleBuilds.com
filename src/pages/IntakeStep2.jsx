// /src/pages/IntakeStep2.jsx
import { useNavigate } from "react-router-dom";
import { useIntake } from "../context/IntakeContext";

export default function IntakeStep2() {
  const navigate = useNavigate();
  const { formData, setFormData } = useIntake();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (!formData.name || !formData.email) {
      alert("Name and Email are required.");
      return;
    }
    navigate("/intake/step-3");
  };

  const handleBack = () => {
    navigate("/intake");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center px-6 font-sans">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Illustration */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/type.png"
            alt="Project Type Illustration"
            className="w-full max-w-[280px] h-auto"
          />
        </div>

        {/* Right Form Fields */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Step 2: Your Info</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name (optional)</label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="e.g. PurpleBuilds LLC"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded"
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

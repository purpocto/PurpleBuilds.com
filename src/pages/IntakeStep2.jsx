import { useNavigate } from "react-router-dom";
import { useFormContext } from "../services/FormContext.jsx";

export default function IntakeStep2() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!formData.name || !formData.email) {
      alert("Name and email are required.");
      return;
    }
    navigate("/intake/step-3");
  };

  return (
    <div className="min-h-screen bg-terminalBg text-crtGreen font-pixel p-6">
      <div className="max-w-xl mx-auto border border-crtGreen p-6 shadow-glow rounded-md">
        <h1 className="text-2xl mb-4">📝 Step 2: Basic Info</h1>

        <div className="space-y-4">
          <label className="block">
            Name
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              className="block w-full mt-1 p-2 bg-terminalBg text-crtGreen border border-crtGreen rounded font-mono"
            />
          </label>

          <label className="block">
            Email
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="block w-full mt-1 p-2 bg-terminalBg text-crtGreen border border-crtGreen rounded font-mono"
            />
          </label>

          <label className="block">
            Business Name <span className="text-silver text-xs">(optional)</span>
            <input
              type="text"
              name="business"
              value={formData.business || ""}
              onChange={handleChange}
              className="block w-full mt-1 p-2 bg-terminalBg text-crtGreen border border-crtGreen rounded font-mono"
            />
          </label>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/intake")}
            className="px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-terminalBg transition-all font-mono rounded shadow-glow"
          >
            ⬅ Back
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-terminalBg transition-all font-mono rounded shadow-glow"
          >
            ➡ Next
          </button>
        </div>
      </div>
    </div>
  );
}

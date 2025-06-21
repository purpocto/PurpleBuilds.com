import { useNavigate } from "react-router-dom";
import { useFormContext } from "../services/FormContext.jsx";

export default function IntakeStep3() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const features = [
    "User Authentication",
    "Admin Panel",
    "Dashboard",
    "File Uploads",
    "Payment Integration",
    "Live Chat",
    "Email Notifications",
    "API Integrations"
  ];

  const toggleFeature = (feature) => {
    const current = formData.features || [];
    const updated = current.includes(feature)
      ? current.filter((f) => f !== feature)
      : [...current, feature];

    updateFormData({ features: updated });
  };

  const handleNext = () => {
    if (!formData.features || formData.features.length === 0) {
      return alert("Please select at least one feature.");
    }
    navigate("/intake/step-4");
  };

  return (
    <div className="min-h-screen bg-terminalBg text-crtGreen font-pixel p-6">
      <div className="max-w-xl mx-auto border border-crtGreen p-6 shadow-glow rounded-md">
        <h1 className="text-2xl mb-4">🛠️ Step 3: Feature Requirements</h1>

        <div className="space-y-3 mb-6">
          {features.map((feature) => (
            <label key={feature} className="block">
              <input
                type="checkbox"
                checked={(formData.features || []).includes(feature)}
                onChange={() => toggleFeature(feature)}
                className="mr-2 align-middle"
              />
              {feature}
            </label>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => navigate("/intake/step-2")}
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

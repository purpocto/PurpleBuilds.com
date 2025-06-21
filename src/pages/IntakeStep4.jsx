import { useNavigate } from "react-router-dom";
import { useFormContext } from "../services/FormContext.jsx";

export default function IntakeStep4() {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormContext();

  const handleNotesChange = (e) => {
    updateFormData({ notes: e.target.value });
  };

  const handleFileChange = (e) => {
    updateFormData({ files: Array.from(e.target.files) });
  };

  const handleNext = () => {
    navigate("/intake/step-5");
  };

  return (
    <div className="min-h-screen bg-terminalBg text-crtGreen font-pixel p-6">
      <div className="max-w-xl mx-auto border border-crtGreen p-6 shadow-glow rounded-md">
        <h1 className="text-2xl mb-4">📎 Step 4: Additional Notes + Files</h1>

        <label className="block mb-6">
          Additional Notes
          <textarea
            value={formData.notes || ""}
            onChange={handleNotesChange}
            rows={6}
            className="block w-full mt-1 p-2 bg-terminalBg text-crtGreen border border-crtGreen rounded font-mono"
            placeholder="Tell us anything else you'd like us to know..."
          />
        </label>

        <label className="block mb-6">
          Upload Files
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="block mt-2 text-crtGreen font-mono"
          />
        </label>

        <div className="flex justify-between">
          <button
            onClick={() => navigate("/intake/step-3")}
            className="px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-terminalBg transition-all rounded shadow-glow"
          >
            ⬅ Back
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-terminalBg transition-all rounded shadow-glow"
          >
            ➡ Next
          </button>
        </div>
      </div>
    </div>
  );
}

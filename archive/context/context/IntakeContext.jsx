// /src/context/IntakeContext.jsx
import { createContext, useContext, useState } from "react";

// Exported context object
export const IntakeContext = createContext();

// Optional convenience hook
export const useIntake = () => useContext(IntakeContext);

// Provider wraps around intake routes
export const IntakeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    projectType: "",
    name: "",
    email: "",
    business: "",
    features: [],
    notes: "",
  });

  return (
    <IntakeContext.Provider value={{ formData, setFormData }}>
      {children}
    </IntakeContext.Provider>
  );
};

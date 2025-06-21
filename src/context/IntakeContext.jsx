// /src/context/IntakeContext.jsx

import { createContext, useContext, useState } from "react";

// Create the context object
const IntakeContext = createContext();

// Hook to access context
export const useIntake = () => useContext(IntakeContext);

// Provider component
export const IntakeProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "",     // from step 1
    name: "",     // from step 2
    email: "",
    business: "", // optional
    features: [], // step 3
    notes: "",    // step 4
  });

  return (
    <IntakeContext.Provider value={{ formData, setFormData }}>
      {children}
    </IntakeContext.Provider>
  );
};

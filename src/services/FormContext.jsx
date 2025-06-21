import { createContext, useContext, useState } from "react";

// Named export so other files can access it
export const FormContext = createContext();


// This is the context provider, which wraps around the app/pages that need access
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  // Method to update form data from any page
  const updateFormData = (updates) => {
    setFormData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Hook for consuming the context
export const useFormContext = () => useContext(FormContext);

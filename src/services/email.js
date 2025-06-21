// /src/services/email.js
import emailjs from "@emailjs/browser";

export const sendConfirmationEmail = (data) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      projectType: data.projectType,
      features: data.selectedFeatures.join(", "),
      notes: data.additionalNotes,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

export const sendAdminSummaryEmail = (data) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      projectType: data.projectType,
      features: data.selectedFeatures.join(", "),
      business: data.business || "N/A",
      notes: data.additionalNotes || "None"
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

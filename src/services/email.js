// src/services/email.js

import emailjs from "@emailjs/browser";

export function sendBuildConfirmationEmail(data) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      selectedPlan: data.selectedPlan,
      service: data.service,
      goal: data.goal,
      experience: data.experience,
      trainingDays: data.trainingDays,
      equipment: data.equipment,
      nutritionGoal: data.nutritionGoal || "Not provided",
      biggestStruggle: data.biggestStruggle,
      successVision: data.successVision,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}

export function sendBuildAdminEmail(data) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      selectedPlan: data.selectedPlan,
      service: data.service,
      goal: data.goal,
      experience: data.experience,
      trainingDays: data.trainingDays,
      equipment: data.equipment,
      nutritionGoal: data.nutritionGoal || "Not provided",
      biggestStruggle: data.biggestStruggle,
      successVision: data.successVision,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
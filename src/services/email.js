// /src/services/email.js
import emailjs from "@emailjs/browser";

// These must match your EmailJS dashboard
const SERVICE_ID = "service_wq7jaj8";
const USER_TEMPLATE_ID = "template_9mn2p1e";
const ADMIN_TEMPLATE_ID = "template_x0ovcve";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;        // keep private in .env

/**
 * Send confirmation email to user
 */
export const sendConfirmationEmail = (formData) => {
  return emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, formData, PUBLIC_KEY);
};

/**
 * Send summary email to yourself (site owner)
 */
export const sendAdminSummaryEmail = (formData) => {
  return emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, formData, PUBLIC_KEY);
};

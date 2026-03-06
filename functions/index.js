const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Initialize Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

// Email credentials stored in Firebase functions config
const gmailEmail = functions.config().email.user;
const gmailPass = functions.config().email.pass;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPass,
  },
});

// Cloud Function: sendIntakeConfirmation
exports.sendIntakeConfirmation = functions.https.onCall(async (data, context) => {
  const { name, email } = data;

  if (!email || !name) {
    throw new functions.https.HttpsError("invalid-argument", "Missing email or name.");
  }

  const mailOptions = {
    from: `PurpleBuilds <${gmailEmail}>`,
    to: email,
    subject: "We've received your project submission 🚀",
    text: `Hey ${name},\n\nThanks for submitting your project to PurpleBuilds. We'll be in touch soon!\n\n– The Nerds at PurpleBuilds`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    throw new functions.https.HttpsError("internal", "Failed to send email");
  }
});

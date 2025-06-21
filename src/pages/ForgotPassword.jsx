
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/auth"; // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (err) {
      console.error(err);
      setError("Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-terminalBg text-crtGreen font-mono">
      <div className="w-full max-w-md p-6 border border-crtGreen rounded shadow-glow">
        <h1 className="text-xl mb-4 text-center">🔁 Forgot Your Password?</h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 bg-terminalBg text-crtGreen border border-crtGreen rounded"
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {message && <p className="text-green-400 mb-2">{message}</p>}

        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full bg-crtGreen text-black py-2 rounded hover:bg-black hover:text-crtGreen border border-crtGreen transition-all"
        >
          {loading ? "Sending..." : "Send Reset Email"}
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-4 text-sm underline text-center hover:text-white"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

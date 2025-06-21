// /src/pages/Signup.jsx
import { useState } from "react";
import { registerWithEmail } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";


export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async () => {
    try {
      const userCredential = await registerWithEmail(form.email, form.password);
      const user = userCredential.user;

      await setDoc(doc(db, "roles", user.uid), {
        admin: false,
        createdAt: new Date(),
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/illustration.png"
            alt="PurpleBuilds Logo"
            className="w-full max-w-[300px] h-auto"
          />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            👾 Create an Account
          </h2>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            onClick={handleSignup}
            className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
          >
            🚀 Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

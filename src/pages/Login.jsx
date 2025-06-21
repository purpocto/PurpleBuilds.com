import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase/auth";
import { db } from "../firebase/firebase";


export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const userCred = await signInWithEmailAndPassword(auth, form.email, form.password);
      const uid = userCred.user.uid;

      const roleRef = doc(db, "roles", uid);
      const roleSnap = await getDoc(roleRef);
      const isAdmin = roleSnap.exists() && roleSnap.data().admin === true;

      navigate(isAdmin ? "/admin" : "/dashboard");
    } catch (err) {
      setError("Login failed. Please check your email and password.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        {/* Logo Panel */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/purplebuildsLOGIN.jpg"
            alt="PurpleBuilds Logo"
            className="w-full max-w-[300px] h-auto"
          />
        </div>

        {/* Login Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">🔐 Login to PurpleBuilds</h2>

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
         onClick={handleLogin}
         disabled={loading}
         className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition" >
            {loading ? "Logging in..." : "Login"}
         </button>
        <p
        onClick={() => navigate("/forgot-password")}
        className="mt-4 text-center text-sm text-purple-700 hover:underline cursor-pointer">
      Forgot Password?
    </p>
        </div>
      </div>
    </div>
  );
}

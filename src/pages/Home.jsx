// /src/pages/Home.jsx
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/purplebuildsHOME.jpg"
            alt="PurpleBuilds Mascot"
            className="w-full max-w-[280px] h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            👋 Welcome to PurpleBuilds.com
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Submit your project, track progress, and collaborate easily.
          </p>

          {user ? (
            <div className="space-y-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded w-full"
              >
                📂 My Submissions
              </button>
              <button
                onClick={() => navigate("/intake/step-1")}
                className="bg-white text-purple-700 border border-purple-700 py-2 px-4 rounded w-full hover:bg-purple-50"
              >
                ➕ New Project
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <button
                onClick={() => navigate("/login")}
                className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded w-full"
              >
                🔐 Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-white text-purple-700 border border-purple-700 py-2 px-4 rounded w-full hover:bg-purple-50"
              >
                ✍️ Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

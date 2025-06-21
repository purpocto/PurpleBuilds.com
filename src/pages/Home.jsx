// src/pages/Home.jsx

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">

        {/* Illustration panel */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/illustration.png"
            alt="PurpleBuilds Mascot"
            className="w-full max-w-[300px] h-auto"
          />
        </div>

        {/* Text and buttons */}
        <div className="md:w-1/2 p-8 text-center flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            👋 Welcome to PurpleBuilds
          </h1>
          <p className="text-gray-600 mb-6">
            Nerdy 90s tech meets modern client intake. Submit your project, track progress, and collaborate easily.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800 transition w-full md:w-auto"
            >
              🔐 Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="border border-purple-700 text-purple-700 py-2 px-6 rounded hover:bg-purple-100 transition w-full md:w-auto"
            >
              ✍️ Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

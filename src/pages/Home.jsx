import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left-side logo */}
        <div className="md:w-1/2 bg-purple-700 flex items-center justify-center p-8">
          <img
            src="/assets/illustration.png"
            alt="PurpleBuilds Logo"
            className="w-full max-w-[300px] h-auto"
          />
        </div>

        {/* Right-side action */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to PurpleBuilds
          </h1>
          <p className="text-gray-600 mb-6">
            The modern home of custom apps, websites, and software builds.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/login")}
              className="bg-purple-700 text-white px-6 py-3 rounded-md shadow hover:bg-purple-800 transition"
            >
              🔐 Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="border border-purple-700 text-purple-700 px-6 py-3 rounded-md hover:bg-purple-700 hover:text-white transition"
            >
              🚀 Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

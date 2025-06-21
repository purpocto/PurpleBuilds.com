// /src/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth } from "./firebase/auth";
import { db } from "./services/firestore";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Intake from "./pages/Intake";
import IntakeStep2 from "./pages/IntakeStep2";
import IntakeStep3 from "./pages/IntakeStep3";
import IntakeStep4 from "./pages/IntakeStep4";
import IntakeStep5 from "./pages/IntakeStep5";
import Admin from "./pages/Admin";
import AdminView from "./pages/AdminView";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        try {
          const roleRef = doc(db, "roles", firebaseUser.uid);
          const roleSnap = await getDoc(roleRef);

          if (roleSnap.exists()) {
            const roleData = roleSnap.data();
            console.log("Role data:", roleData);
            setIsAdmin(roleData.admin === true);
          } else {
            console.log("No role document found.");
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Failed to fetch role document:", error);
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-black text-crtGreen font-mono flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Intake */}
          <Route path="/intake" element={<Intake />} />
          <Route path="/intake/step-2" element={<IntakeStep2 />} />
          <Route path="/intake/step-3" element={<IntakeStep3 />} />
          <Route path="/intake/step-4" element={<IntakeStep4 />} />
          <Route path="/intake/step-5" element={<IntakeStep5 />} />


          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={user && !isAdmin ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin"
            element={user && isAdmin ? <Admin /> : <Navigate to="/" />}
          />
          <Route
            path="/adminview/:id"
            element={user && isAdmin ? <AdminView /> : <Navigate to="/" />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

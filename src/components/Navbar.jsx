// /src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/auth";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const roleRef = doc(db, "roles", user.uid);
        const roleSnap = await getDoc(roleRef);
        setIsAdmin(roleSnap.exists() && roleSnap.data().admin === true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-white shadow-md text-purple-800 font-sans border-b border-purple-300 p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🖥️ PurpleBuilds
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:text-purple-600">Home</Link>

        {user ? (
          <>
            {isAdmin ? (
              <>
                <Link to="/admin" className="hover:text-purple-600">Admin Panel</Link>
                <Link to="/dashboard" className="hover:text-purple-600">Admin Dashboard</Link>
              </>
            ) : (
              <>
                <Link to="/intake" className="hover:text-purple-600">New Project</Link>
                <Link to="/dashboard" className="hover:text-purple-600">My Submissions</Link>
              </>
            )}
            <button
              onClick={handleLogout}
              className="border border-purple-700 px-3 py-1 rounded hover:bg-purple-700 hover:text-white transition"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-purple-600">Login</Link>
            <Link to="/signup" className="hover:text-purple-600">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

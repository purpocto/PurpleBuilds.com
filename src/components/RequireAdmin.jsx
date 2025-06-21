import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export default function RequireAdmin({ children }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const role = userDoc.exists() ? userDoc.data().role : "user";

      if (role !== "admin") {
        navigate("/dashboard");
      } else {
        setIsAdmin(true);
      }

      setIsLoading(false);
    };

    checkAdmin();
  }, [navigate]);

  if (isLoading) {
    return <p className="text-center text-crtGreen p-6">Checking permissions...</p>;
  }

  return isAdmin ? children : null;
}

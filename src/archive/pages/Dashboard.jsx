// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/auth";

export default function Dashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(
          collection(db, "intakeForms"),
          where("email", "==", user.email)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching submissions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center font-sans px-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-5xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">📁 Your Submissions</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : submissions.length === 0 ? (
          <p className="text-center text-gray-500">No submissions found.</p>
        ) : (
          <ul className="space-y-4">
            {submissions.map((submission) => (
              <li
                key={submission.id}
                className="border border-purple-300 p-4 rounded-md bg-gray-50 shadow"
              >
                <p><strong>Project Type:</strong> {submission.projectType}</p>
                <p><strong>Status:</strong> {submission.status || "submitted"}</p>
                <p><strong>Notes:</strong> {submission.notes}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

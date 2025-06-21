import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth } from "../firebase/auth";
import { db } from "../services/firestore";

export default function Dashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const q = query(collection(db, "intakeForms"), where("userId", "==", user.uid));
        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

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
    <div className="min-h-screen bg-black text-crtGreen font-mono p-6">
      <h1 className="text-3xl mb-6 text-center">💾 Your Submissions</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : submissions.length === 0 ? (
        <div className="text-center border border-crtGreen p-6 rounded-md">
          <p>No submissions found.</p>
          <a
            href="/intake"
            className="inline-block mt-4 px-4 py-2 border border-crtGreen rounded hover:bg-crtGreen hover:text-black transition"
          >
            ➕ Get Started Here
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className="border border-crtGreen rounded p-4 shadow-glow"
            >
              <h2 className="text-xl mb-2">{submission.projectType}</h2>
              <p>🕒 Submitted on: {new Date(submission.createdAt?.seconds * 1000).toLocaleString()}</p>
              <p>📦 Features: {submission.features?.join(", ")}</p>
              <p>🗒️ Notes: {submission.notes}</p>
              <p>📌 Status: <span className="text-silver italic">{submission.status || "Submitted"}</span></p>

              <div className="mt-4 border-t border-crtGreen pt-2">
                <p className="text-lg mb-1">💸 Quote & Invoices</p>
                <p className="text-silver text-sm">No quote available yet.</p>
                {/* Future: Download link or PDF embed */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

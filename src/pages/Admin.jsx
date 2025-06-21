import { useEffect, useState } from "react";
import { db } from "../services/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "intakeForms"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubmissions(data);
      } catch (err) {
        console.error("Error fetching admin submissions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-terminalBg text-crtGreen p-6 font-mono">
      <h1 className="text-2xl mb-4">🗂️ Admin Submissions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div key={submission.id} className="border border-crtGreen p-4 rounded shadow-glow">
              <p>
                <b>{submission.projectType}</b> —{" "}
                {submission.createdAt?.toDate().toLocaleString()}
              </p>
              <p>
                <b>Name:</b> {submission.name} — <b>Email:</b> {submission.email}
              </p>
              <p><b>Business:</b> {submission.business}</p>
              <p>
                <b>Features:</b>{" "}
                <span className="text-green-400">
                  {submission.features?.join(", ")}
                </span>
              </p>
              <p><b>Notes:</b> {submission.notes}</p>
              <p><b>Status:</b> {submission.status || "submitted"}</p>
              <button
                onClick={() => navigate(`/adminview/${submission.id}`)}
                className="mt-3 px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-black rounded shadow-glow"
              >
                ✏️ View / Edit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

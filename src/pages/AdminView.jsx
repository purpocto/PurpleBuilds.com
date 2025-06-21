import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../services/firestore";

export default function AdminView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [submission, setSubmission] = useState(null);
  const [status, setStatus] = useState("submitted");
  const [adminNotes, setAdminNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const docRef = doc(db, "intakeForms", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSubmission(docSnap.data());
          setStatus(docSnap.data().status || "submitted");
          setAdminNotes(docSnap.data().adminNotes || "");
        }
      } catch (err) {
        console.error("Error loading submission:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmission();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const ref = doc(db, "intakeForms", id);
      await updateDoc(ref, {
        status,
        adminNotes,
        updatedAt: serverTimestamp(),
      });

      setSaved(true);
      setTimeout(() => {
        navigate("/admin"); // Send them back after confirmation
      }, 2000);
    } catch (err) {
      console.error("Error updating submission:", err);
      alert("Update failed.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-terminalBg text-crtGreen font-mono p-6">
        <h1 className="text-2xl mb-4">📋 Admin View</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terminalBg text-crtGreen font-mono p-6">
      <h1 className="text-2xl mb-4">📋 Admin View</h1>
      {submission ? (
        <div className="border border-crtGreen p-6 rounded shadow-glow">
          <p><b>Name:</b> {submission.name}</p>
          <p><b>Email:</b> {submission.email}</p>
          <p><b>Business:</b> {submission.business}</p>
          <p><b>Type:</b> {submission.projectType}</p>
          <p><b>Features:</b> {submission.features?.join(", ")}</p>
          <p><b>Notes:</b> {submission.notes}</p>

          <div className="mt-4">
            <label className="block mb-2">
              <b>Status:</b>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-black text-crtGreen border border-crtGreen p-2 mt-1"
              >
                <option value="submitted">submitted</option>
                <option value="in progress">in progress</option>
                <option value="quoted">quoted</option>
                <option value="completed">completed</option>
              </select>
            </label>

            <label className="block mt-4">
              <b>Admin Notes:</b>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                className="w-full h-24 bg-black text-crtGreen border border-crtGreen p-2 mt-1"
              />
            </label>

            <button
              onClick={handleUpdate}
              className="mt-4 px-4 py-2 border border-crtGreen hover:bg-crtGreen hover:text-black rounded shadow-glow"
            >
              💾 Save / Update
            </button>

            {saved && (
              <div className="text-green-400 font-mono mt-4">
                ✅ Changes saved! Redirecting...
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Something went wrong loading the submission.</p>
      )}
    </div>
  );
}

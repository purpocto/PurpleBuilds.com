export default function SubmissionCard({ submission }) {
    return (
      <div className="border border-crtGreen p-4 rounded-md hover:shadow-glow transition">
        <h2 className="text-xl font-bold">{submission.projectType}</h2>
        <p className="text-sm opacity-70">
          Submitted on:{" "}
          {submission.createdAt?.seconds
            ? new Date(submission.createdAt.seconds * 1000).toLocaleString()
            : "N/A"}
        </p>
        <p>
          <span className="opacity-70">Features:</span>{" "}
          {submission.features?.join(", ") || "None"}
        </p>
        <p>
          <span className="opacity-70">Notes:</span>{" "}
          {submission.notes?.length > 0 ? submission.notes : "None"}
        </p>
      </div>
    );
  }

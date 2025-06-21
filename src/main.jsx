// /src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { IntakeProvider } from "./context/IntakeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntakeProvider>
      <App />
    </IntakeProvider>
  </React.StrictMode>
);

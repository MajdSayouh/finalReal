import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.esm.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div dir="rtl">
      <App />
    </div>
  </React.StrictMode>
);

// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppTheme from "./theme/AppTheme.jsx";

// Punto de entrada principal que monta la aplicación de React.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppTheme>
      <App />
    </AppTheme>
  </React.StrictMode>
);
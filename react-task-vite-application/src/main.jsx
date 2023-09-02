import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Ahora como tenemos un provider que contiene el contexto ahora
// tenemos que decirle que todo va a estar dentro de ese contexto.
import { TaskContextProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);

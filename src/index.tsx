import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./css/index.scss";
import { HashRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </React.StrictMode>
);

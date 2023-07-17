import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

import './sass/global.scss';

const container = document.getElementById("app");

if(container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );  
}


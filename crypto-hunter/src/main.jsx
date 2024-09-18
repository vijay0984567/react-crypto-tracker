import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.css";
import CryptoContext from "./CryptoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>
);

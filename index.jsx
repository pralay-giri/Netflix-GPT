import React from "react";
import ReactDom from "react-dom/client";
import App from "./src/components/App";
import "./style.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);

import React from "react";
import { createRoot }  from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./Context/LangContext";
import App from "./App";

//React 18.0.0
createRoot(document.getElementById("root")).render(
  <LangProvider>
    <App />
  </LangProvider>
);
/* React 17.0.0
ReactDOM.render(
  <LangProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangProvider>,
  document.getElementById("root")
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

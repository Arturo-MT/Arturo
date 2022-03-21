import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import App from "../pages/App"
import React from "react";
import Pdf from "../pages/Pdf";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Arturo" element={<App/>} />
        <Route exact path="/pdf" element={<Pdf/>} />
      </Switch>
    </BrowserRouter>
  );
}

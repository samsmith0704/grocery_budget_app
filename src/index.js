import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./components/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreHeader from "./components/StoreHeader";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="store" element={<Store />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

import "../app/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recommendations from "./pages/Recommendations.tsx";
import Form from "./pages/Form.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Recommendations />} />
        <Route element={<Form />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

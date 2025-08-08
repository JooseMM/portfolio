import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./page/home/Home.page";
import { ContactPage } from "./page/contact/Contact.page";
import { Navbar } from "./components/navbar/navbar.component";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

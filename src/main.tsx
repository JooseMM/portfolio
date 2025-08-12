import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar } from "./shared/navbar/navbar.component";
import { HomePage } from "./home/home.page";
import { UIProvider } from "./shared/utils/context/provider.context";
import { Footer } from "./shared/footer/footer.section";
import { ContactPage } from "./contact/contact.page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UIProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar } from "./shared/navbar/navbar.component";
import { HomePage } from "./home/home.page";
import { UIProvider } from "./shared/utils/context/provider.context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  </StrictMode>,
);

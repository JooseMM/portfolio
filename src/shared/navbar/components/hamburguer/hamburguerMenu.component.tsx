import { useState } from "react";
import { Hamburguer } from "./components/hamburguer.icon";
import { CloseMenu } from "./components/closeMenu.icon";
import { useUI } from "../../../utils/context/hook.context";
import "./hamburguerMenu.style.css";

export const HamburguerMenu = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useUI();
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  const handleClick = () => {
    setIsAnimationRunning(true);
    setTimeout(() => setIsAnimationRunning(false), 300);
    toggleMobileMenu();
  };

  return (
    <button
      onClick={handleClick}
      className={`hamburguer ${isAnimationRunning ? "hamburguer--animated" : ""}`}
    >
      {mobileMenuOpen ? <CloseMenu /> : <Hamburguer />}
    </button>
  );
};

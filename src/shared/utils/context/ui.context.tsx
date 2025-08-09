import { createContext } from "react";
import type { Theme } from "../interfaces/Theme.type";

interface UIContextProps {
  currentTheme: Theme;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const UIContext = createContext<UIContextProps | undefined>(undefined);

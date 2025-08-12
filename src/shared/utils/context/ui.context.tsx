import { createContext } from "react";
import type { Theme } from "../interfaces/Theme.type";
import type { SupportedLanguage } from "../interfaces/SupportedLanguage.type";

interface UIContextProps {
  currentTheme: Theme;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  preferredLanguage: SupportedLanguage;
  toggleLanguage: () => void;
}

export const UIContext = createContext<UIContextProps | undefined>(undefined);

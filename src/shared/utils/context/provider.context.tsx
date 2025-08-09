import { useEffect, useState, type ReactNode } from "react";
import type { Theme } from "../interfaces/Theme.type";
import { UIContext } from "./ui.context";
import { ThemeOptions } from "../interfaces/Theme.enum";
import { setTheme } from "./provider.context.utils";

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(ThemeOptions.LIGTH);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTheme(currentTheme === ThemeOptions.DARK, document.documentElement);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) =>
      prev === ThemeOptions.DARK ? ThemeOptions.LIGTH : ThemeOptions.DARK,
    );
  };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <UIContext.Provider
      value={{
        currentTheme,
        toggleTheme,
        mobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

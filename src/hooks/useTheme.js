import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Custom hook to use Theme Context
 * Provides easy access to theme state and toggle functionality
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }

  return context;
};

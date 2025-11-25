import { createContext, useState, useEffect } from "react";
import { STORAGE_KEYS, THEME_MODES } from "../utils/constants";
import { storage } from "../utils/helpers";

export const ThemeContext = createContext(null);

/**
 * Custom Theme Provider
 * Manages theme mode (light/dark) and provides theme toggle functionality
 * Uses Tailwind CSS dark mode class strategy
 */
export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(THEME_MODES.LIGHT);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedMode = storage.get(STORAGE_KEYS.THEME_MODE);
    if (savedMode && Object.values(THEME_MODES).includes(savedMode)) {
      setMode(savedMode);
    }
  }, []);

  // Update document class when mode changes
  useEffect(() => {
    if (mode === THEME_MODES.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  /**
   * Toggle between light and dark mode
   */
  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode =
        prevMode === THEME_MODES.LIGHT ? THEME_MODES.DARK : THEME_MODES.LIGHT;
      storage.set(STORAGE_KEYS.THEME_MODE, newMode);
      return newMode;
    });
  };

  /**
   * Set specific theme mode
   */
  const setThemeMode = (newMode) => {
    if (Object.values(THEME_MODES).includes(newMode)) {
      setMode(newMode);
      storage.set(STORAGE_KEYS.THEME_MODE, newMode);
    }
  };

  const value = {
    mode,
    toggleTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

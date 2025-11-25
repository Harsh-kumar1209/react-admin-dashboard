import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEYS, ROUTES } from "../utils/constants";
import { storage } from "../utils/helpers";
import * as authService from "../services/authService";

export const AuthContext = createContext(null);

/**
 * AuthProvider Component
 * Manages authentication state and provides auth methods to child components
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check for existing auth token on mount
  useEffect(() => {
    const initAuth = () => {
      const token = storage.get(STORAGE_KEYS.AUTH_TOKEN);
      const userData = storage.get(STORAGE_KEYS.USER_DATA);

      if (token && userData) {
        setUser(userData);
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  /**
   * Login user
   */
  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);

      // Store token and user data
      storage.set(STORAGE_KEYS.AUTH_TOKEN, response.token);
      storage.set(STORAGE_KEYS.USER_DATA, response.user);

      setUser(response.user);
      navigate(ROUTES.DASHBOARD);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || "Login failed. Please try again.",
      };
    }
  };

  /**
   * Logout user
   */
  const logout = () => {
    // Clear auth data
    storage.remove(STORAGE_KEYS.AUTH_TOKEN);
    storage.remove(STORAGE_KEYS.USER_DATA);

    setUser(null);
    navigate(ROUTES.LOGIN);
  };

  /**
   * Update user profile
   */
  const updateProfile = (userData) => {
    const updatedUser = { ...user, ...userData };
    storage.set(STORAGE_KEYS.USER_DATA, updatedUser);
    setUser(updatedUser);
  };

  /**
   * Check if user is authenticated
   */
  const isAuthenticated = () => {
    return !!user && !!storage.get(STORAGE_KEYS.AUTH_TOKEN);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    updateProfile,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

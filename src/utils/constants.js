/**
 * Application Constants
 * Centralized configuration and constant values
 */

// API Configuration
export const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  THEME_MODE: "theme_mode",
  USER_DATA: "user_data",
};

// Route Paths
export const ROUTES = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  USER_ADD: "/users/add",
  USER_EDIT: "/users/edit/:id",
  PRODUCTS: "/products",
  PRODUCT_ADD: "/products/add",
  PRODUCT_EDIT: "/products/edit/:id",
  ORDERS: "/orders",
  SETTINGS: "/settings",
};

// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
};

// Order Status
export const ORDER_STATUS = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  PROCESSING: "Processing",
};

// Product Categories
export const PRODUCT_CATEGORIES = [
  "Electronics",
  "Clothing",
  "Food & Beverage",
  "Home & Garden",
  "Sports & Outdoors",
  "Books",
  "Toys & Games",
  "Health & Beauty",
];

// Chart Colors
export const CHART_COLORS = {
  primary: "#1976d2",
  secondary: "#dc004e",
  success: "#4caf50",
  warning: "#ff9800",
  error: "#f44336",
  info: "#2196f3",
};

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

// Theme
export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
};

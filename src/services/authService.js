import { generateId } from "../utils/helpers";

/**
 * Authentication Service
 * Handles login, logout, and authentication-related operations
 * Uses mock data for demonstration purposes
 */

// Mock user database
const MOCK_USERS = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    avatar: null,
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    password: "john123",
    role: "user",
    avatar: null,
  },
];

/**
 * Simulate API delay
 */
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Login user
 */
export const login = async (email, password) => {
  await delay();

  const user = MOCK_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Remove password from response
  const { password: _, ...userWithoutPassword } = user;

  return {
    token: `mock-jwt-token-${generateId()}`,
    user: userWithoutPassword,
  };
};

/**
 * Register new user (mock)
 */
export const register = async (userData) => {
  await delay();

  // Check if user already exists
  const existingUser = MOCK_USERS.find((u) => u.email === userData.email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = {
    id: generateId(),
    ...userData,
    role: "user",
    avatar: null,
  };

  MOCK_USERS.push(newUser);

  const { password: _, ...userWithoutPassword } = newUser;

  return {
    token: `mock-jwt-token-${generateId()}`,
    user: userWithoutPassword,
  };
};

/**
 * Get current user profile
 */
export const getCurrentUser = async () => {
  await delay();

  // In a real app, this would validate the token and return user data
  const { password: _, ...userWithoutPassword } = MOCK_USERS[0];
  return userWithoutPassword;
};

/**
 * Update user profile
 */
export const updateProfile = async (userId, updates) => {
  await delay();

  const userIndex = MOCK_USERS.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    throw new Error("User not found");
  }

  MOCK_USERS[userIndex] = { ...MOCK_USERS[userIndex], ...updates };
  const { password: _, ...userWithoutPassword } = MOCK_USERS[userIndex];

  return userWithoutPassword;
};

/**
 * Change password
 */
export const changePassword = async (userId, oldPassword, newPassword) => {
  await delay();

  const user = MOCK_USERS.find((u) => u.id === userId);
  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== oldPassword) {
    throw new Error("Current password is incorrect");
  }

  user.password = newPassword;
  return { message: "Password changed successfully" };
};

/**
 * Logout (client-side only in this mock)
 */
export const logout = async () => {
  await delay(200);
  return { message: "Logged out successfully" };
};

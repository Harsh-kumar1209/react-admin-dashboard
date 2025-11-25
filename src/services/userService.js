import { generateId } from "../utils/helpers";

/**
 * User Service
 * Handles all user-related API operations
 * Uses mock data for demonstration purposes
 */

// Mock users database
let MOCK_USERS_DB = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    phone: "+1 234 567 8901",
    joinDate: "2023-01-15",
    avatar: null,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
    phone: "+1 234 567 8902",
    joinDate: "2023-02-20",
    avatar: null,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Moderator",
    status: "Active",
    phone: "+1 234 567 8903",
    joinDate: "2023-03-10",
    avatar: null,
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "User",
    status: "Inactive",
    phone: "+1 234 567 8904",
    joinDate: "2023-04-05",
    avatar: null,
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "User",
    status: "Active",
    phone: "+1 234 567 8905",
    joinDate: "2023-05-12",
    avatar: null,
  },
];

/**
 * Simulate API delay
 */
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get all users
 */
export const getUsers = async () => {
  await delay();
  return [...MOCK_USERS_DB];
};

/**
 * Get user by ID
 */
export const getUserById = async (id) => {
  await delay();
  const user = MOCK_USERS_DB.find((u) => u.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return { ...user };
};

/**
 * Create new user
 */
export const createUser = async (userData) => {
  await delay();

  // Check if email already exists
  const existingUser = MOCK_USERS_DB.find((u) => u.email === userData.email);
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const newUser = {
    id: generateId(),
    ...userData,
    joinDate: new Date().toISOString().split("T")[0],
    avatar: null,
  };

  MOCK_USERS_DB.push(newUser);
  return { ...newUser };
};

/**
 * Update user
 */
export const updateUser = async (id, updates) => {
  await delay();

  const userIndex = MOCK_USERS_DB.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    throw new Error("User not found");
  }

  // Check if email is being changed to an existing email
  if (updates.email) {
    const existingUser = MOCK_USERS_DB.find(
      (u) => u.email === updates.email && u.id !== id
    );
    if (existingUser) {
      throw new Error("User with this email already exists");
    }
  }

  MOCK_USERS_DB[userIndex] = { ...MOCK_USERS_DB[userIndex], ...updates };
  return { ...MOCK_USERS_DB[userIndex] };
};

/**
 * Delete user
 */
export const deleteUser = async (id) => {
  await delay();

  const userIndex = MOCK_USERS_DB.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    throw new Error("User not found");
  }

  const deletedUser = MOCK_USERS_DB.splice(userIndex, 1)[0];
  return { ...deletedUser };
};

/**
 * Search users
 */
export const searchUsers = async (query) => {
  await delay();

  const lowerQuery = query.toLowerCase();
  return MOCK_USERS_DB.filter(
    (user) =>
      user.name.toLowerCase().includes(lowerQuery) ||
      user.email.toLowerCase().includes(lowerQuery) ||
      user.role.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Get user statistics
 */
export const getUserStats = async () => {
  await delay();

  return {
    total: MOCK_USERS_DB.length,
    active: MOCK_USERS_DB.filter((u) => u.status === "Active").length,
    inactive: MOCK_USERS_DB.filter((u) => u.status === "Inactive").length,
    admins: MOCK_USERS_DB.filter((u) => u.role === "Admin").length,
  };
};

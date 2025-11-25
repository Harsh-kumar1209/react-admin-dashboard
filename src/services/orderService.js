import { generateId } from "../utils/helpers";
import { ORDER_STATUS } from "../utils/constants";

/**
 * Order Service
 * Handles all order-related API operations
 * Uses mock data for demonstration purposes
 */

// Mock orders database
let MOCK_ORDERS_DB = [
  {
    id: "1001",
    customerName: "John Doe",
    email: "john.doe@example.com",
    product: "Wireless Headphones",
    quantity: 2,
    total: 159.98,
    status: "Completed",
    orderDate: "2023-11-15",
    deliveryDate: "2023-11-20",
  },
  {
    id: "1002",
    customerName: "Jane Smith",
    email: "jane.smith@example.com",
    product: "Running Shoes",
    quantity: 1,
    total: 129.99,
    status: "Processing",
    orderDate: "2023-11-18",
    deliveryDate: "2023-11-25",
  },
  {
    id: "1003",
    customerName: "Bob Johnson",
    email: "bob.johnson@example.com",
    product: "Smart Watch",
    quantity: 1,
    total: 199.99,
    status: "Pending",
    orderDate: "2023-11-20",
    deliveryDate: null,
  },
  {
    id: "1004",
    customerName: "Alice Williams",
    email: "alice.williams@example.com",
    product: "Yoga Mat",
    quantity: 3,
    total: 89.97,
    status: "Completed",
    orderDate: "2023-11-12",
    deliveryDate: "2023-11-17",
  },
  {
    id: "1005",
    customerName: "Charlie Brown",
    email: "charlie.brown@example.com",
    product: "Coffee Maker",
    quantity: 1,
    total: 49.99,
    status: "Cancelled",
    orderDate: "2023-11-10",
    deliveryDate: null,
  },
  {
    id: "1006",
    customerName: "Diana Prince",
    email: "diana.prince@example.com",
    product: "Desk Lamp",
    quantity: 2,
    total: 79.98,
    status: "Processing",
    orderDate: "2023-11-22",
    deliveryDate: "2023-11-28",
  },
  {
    id: "1007",
    customerName: "Edward Norton",
    email: "edward.norton@example.com",
    product: "Wireless Headphones",
    quantity: 1,
    total: 79.99,
    status: "Pending",
    orderDate: "2023-11-23",
    deliveryDate: null,
  },
  {
    id: "1008",
    customerName: "Fiona Green",
    email: "fiona.green@example.com",
    product: "Running Shoes",
    quantity: 2,
    total: 259.98,
    status: "Completed",
    orderDate: "2023-11-08",
    deliveryDate: "2023-11-14",
  },
];

/**
 * Simulate API delay
 */
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get all orders
 */
export const getOrders = async () => {
  await delay();
  return [...MOCK_ORDERS_DB];
};

/**
 * Get order by ID
 */
export const getOrderById = async (id) => {
  await delay();
  const order = MOCK_ORDERS_DB.find((o) => o.id === id);
  if (!order) {
    throw new Error("Order not found");
  }
  return { ...order };
};

/**
 * Create new order
 */
export const createOrder = async (orderData) => {
  await delay();

  const newOrder = {
    id: (1000 + MOCK_ORDERS_DB.length + 1).toString(),
    ...orderData,
    status: ORDER_STATUS.PENDING,
    orderDate: new Date().toISOString().split("T")[0],
    deliveryDate: null,
  };

  MOCK_ORDERS_DB.push(newOrder);
  return { ...newOrder };
};

/**
 * Update order
 */
export const updateOrder = async (id, updates) => {
  await delay();

  const orderIndex = MOCK_ORDERS_DB.findIndex((o) => o.id === id);
  if (orderIndex === -1) {
    throw new Error("Order not found");
  }

  MOCK_ORDERS_DB[orderIndex] = { ...MOCK_ORDERS_DB[orderIndex], ...updates };
  return { ...MOCK_ORDERS_DB[orderIndex] };
};

/**
 * Update order status
 */
export const updateOrderStatus = async (id, status) => {
  await delay();

  const orderIndex = MOCK_ORDERS_DB.findIndex((o) => o.id === id);
  if (orderIndex === -1) {
    throw new Error("Order not found");
  }

  MOCK_ORDERS_DB[orderIndex].status = status;

  // Set delivery date when completed
  if (
    status === ORDER_STATUS.COMPLETED &&
    !MOCK_ORDERS_DB[orderIndex].deliveryDate
  ) {
    MOCK_ORDERS_DB[orderIndex].deliveryDate = new Date()
      .toISOString()
      .split("T")[0];
  }

  return { ...MOCK_ORDERS_DB[orderIndex] };
};

/**
 * Delete order
 */
export const deleteOrder = async (id) => {
  await delay();

  const orderIndex = MOCK_ORDERS_DB.findIndex((o) => o.id === id);
  if (orderIndex === -1) {
    throw new Error("Order not found");
  }

  const deletedOrder = MOCK_ORDERS_DB.splice(orderIndex, 1)[0];
  return { ...deletedOrder };
};

/**
 * Get orders by status
 */
export const getOrdersByStatus = async (status) => {
  await delay();
  return MOCK_ORDERS_DB.filter((o) => o.status === status);
};

/**
 * Get order statistics
 */
export const getOrderStats = async () => {
  await delay();

  const total = MOCK_ORDERS_DB.length;
  const pending = MOCK_ORDERS_DB.filter(
    (o) => o.status === ORDER_STATUS.PENDING
  ).length;
  const processing = MOCK_ORDERS_DB.filter(
    (o) => o.status === ORDER_STATUS.PROCESSING
  ).length;
  const completed = MOCK_ORDERS_DB.filter(
    (o) => o.status === ORDER_STATUS.COMPLETED
  ).length;
  const cancelled = MOCK_ORDERS_DB.filter(
    (o) => o.status === ORDER_STATUS.CANCELLED
  ).length;
  const totalRevenue = MOCK_ORDERS_DB.filter(
    (o) => o.status === ORDER_STATUS.COMPLETED
  ).reduce((sum, o) => sum + o.total, 0);

  return {
    total,
    pending,
    processing,
    completed,
    cancelled,
    totalRevenue: totalRevenue.toFixed(2),
  };
};

/**
 * Get recent orders
 */
export const getRecentOrders = async (limit = 5) => {
  await delay();
  return [...MOCK_ORDERS_DB]
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    .slice(0, limit);
};

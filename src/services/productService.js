import { generateId } from "../utils/helpers";
import { PRODUCT_CATEGORIES } from "../utils/constants";

/**
 * Product Service
 * Handles all product-related API operations
 * Uses mock data for demonstration purposes
 */

// Mock products database
let MOCK_PRODUCTS_DB = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    stock: 150,
    status: "In Stock",
    description: "High-quality wireless headphones with noise cancellation",
    sku: "WH-001",
    createdDate: "2023-01-10",
  },
  {
    id: "2",
    name: "Running Shoes",
    price: 129.99,
    category: "Sports & Outdoors",
    stock: 75,
    status: "In Stock",
    description: "Comfortable running shoes for all terrains",
    sku: "RS-002",
    createdDate: "2023-02-15",
  },
  {
    id: "3",
    name: "Coffee Maker",
    price: 49.99,
    category: "Home & Garden",
    stock: 0,
    status: "Out of Stock",
    description: "Programmable coffee maker with timer",
    sku: "CM-003",
    createdDate: "2023-03-20",
  },
  {
    id: "4",
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports & Outdoors",
    stock: 200,
    status: "In Stock",
    description: "Non-slip yoga mat with carrying strap",
    sku: "YM-004",
    createdDate: "2023-04-05",
  },
  {
    id: "5",
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    stock: 45,
    status: "In Stock",
    description: "Fitness tracker with heart rate monitor",
    sku: "SW-005",
    createdDate: "2023-05-12",
  },
  {
    id: "6",
    name: "Desk Lamp",
    price: 39.99,
    category: "Home & Garden",
    stock: 10,
    status: "Low Stock",
    description: "LED desk lamp with adjustable brightness",
    sku: "DL-006",
    createdDate: "2023-06-18",
  },
];

/**
 * Simulate API delay
 */
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Get all products
 */
export const getProducts = async () => {
  await delay();
  return [...MOCK_PRODUCTS_DB];
};

/**
 * Get product by ID
 */
export const getProductById = async (id) => {
  await delay();
  const product = MOCK_PRODUCTS_DB.find((p) => p.id === id);
  if (!product) {
    throw new Error("Product not found");
  }
  return { ...product };
};

/**
 * Create new product
 */
export const createProduct = async (productData) => {
  await delay();

  // Check if SKU already exists
  const existingProduct = MOCK_PRODUCTS_DB.find(
    (p) => p.sku === productData.sku
  );
  if (existingProduct) {
    throw new Error("Product with this SKU already exists");
  }

  // Determine status based on stock
  let status = "In Stock";
  if (productData.stock === 0) {
    status = "Out of Stock";
  } else if (productData.stock < 20) {
    status = "Low Stock";
  }

  const newProduct = {
    id: generateId(),
    ...productData,
    status,
    createdDate: new Date().toISOString().split("T")[0],
  };

  MOCK_PRODUCTS_DB.push(newProduct);
  return { ...newProduct };
};

/**
 * Update product
 */
export const updateProduct = async (id, updates) => {
  await delay();

  const productIndex = MOCK_PRODUCTS_DB.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    throw new Error("Product not found");
  }

  // Check if SKU is being changed to an existing SKU
  if (updates.sku) {
    const existingProduct = MOCK_PRODUCTS_DB.find(
      (p) => p.sku === updates.sku && p.id !== id
    );
    if (existingProduct) {
      throw new Error("Product with this SKU already exists");
    }
  }

  // Update status based on stock if stock is being updated
  if (updates.stock !== undefined) {
    if (updates.stock === 0) {
      updates.status = "Out of Stock";
    } else if (updates.stock < 20) {
      updates.status = "Low Stock";
    } else {
      updates.status = "In Stock";
    }
  }

  MOCK_PRODUCTS_DB[productIndex] = {
    ...MOCK_PRODUCTS_DB[productIndex],
    ...updates,
  };
  return { ...MOCK_PRODUCTS_DB[productIndex] };
};

/**
 * Delete product
 */
export const deleteProduct = async (id) => {
  await delay();

  const productIndex = MOCK_PRODUCTS_DB.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    throw new Error("Product not found");
  }

  const deletedProduct = MOCK_PRODUCTS_DB.splice(productIndex, 1)[0];
  return { ...deletedProduct };
};

/**
 * Search products
 */
export const searchProducts = async (query) => {
  await delay();

  const lowerQuery = query.toLowerCase();
  return MOCK_PRODUCTS_DB.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.sku.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Get products by category
 */
export const getProductsByCategory = async (category) => {
  await delay();
  return MOCK_PRODUCTS_DB.filter((p) => p.category === category);
};

/**
 * Get product statistics
 */
export const getProductStats = async () => {
  await delay();

  const total = MOCK_PRODUCTS_DB.length;
  const inStock = MOCK_PRODUCTS_DB.filter(
    (p) => p.status === "In Stock"
  ).length;
  const outOfStock = MOCK_PRODUCTS_DB.filter(
    (p) => p.status === "Out of Stock"
  ).length;
  const lowStock = MOCK_PRODUCTS_DB.filter(
    (p) => p.status === "Low Stock"
  ).length;
  const totalValue = MOCK_PRODUCTS_DB.reduce(
    (sum, p) => sum + p.price * p.stock,
    0
  );

  return {
    total,
    inStock,
    outOfStock,
    lowStock,
    totalValue: totalValue.toFixed(2),
  };
};

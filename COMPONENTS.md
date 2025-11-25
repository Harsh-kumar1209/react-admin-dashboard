# Component Documentation

## 🧩 Reusable Components

### StatCard

**Location:** `src/components/Cards/StatCard.jsx`

A reusable statistics card component with icon, value, and trend indicator.

**Props:**

```javascript
{
  title: string,        // Card title
  value: string|number, // Main value to display
  icon: Component,      // Lucide icon component
  color: string,        // 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  percentage: number,   // Percentage change (optional)
  subtitle: string      // Additional text (optional)
}
```

**Example:**

```jsx
import { Users } from "lucide-react";
import StatCard from "./components/Cards/StatCard";

<StatCard
  title="Total Users"
  value={1234}
  icon={Users}
  color="primary"
  percentage={12.5}
  subtitle="vs last month"
/>;
```

---

### LineChart

**Location:** `src/components/Charts/LineChart.jsx`

Responsive line chart using Recharts.

**Props:**

```javascript
{
  data: Array,         // Chart data array
  title: string,       // Chart title (optional)
  lines: Array,        // Line configurations
  xKey: string,        // Key for X-axis (default: 'name')
  height: number       // Chart height (default: 300)
}
```

**Example:**

```jsx
<LineChart
  title="Sales Overview"
  data={[
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
  ]}
  lines={[{ dataKey: "sales", stroke: "#2196f3", name: "Sales" }]}
  height={300}
/>
```

---

### BarChart

**Location:** `src/components/Charts/BarChart.jsx`

Responsive bar chart using Recharts.

**Props:**

```javascript
{
  data: Array,         // Chart data array
  title: string,       // Chart title (optional)
  bars: Array,         // Bar configurations
  xKey: string,        // Key for X-axis (default: 'name')
  height: number       // Chart height (default: 300)
}
```

**Example:**

```jsx
<BarChart
  title="Weekly Orders"
  data={[
    { name: "Mon", orders: 65 },
    { name: "Tue", orders: 59 },
  ]}
  bars={[{ dataKey: "orders", fill: "#ff9800", name: "Orders" }]}
/>
```

---

### PieChart

**Location:** `src/components/Charts/PieChart.jsx`

Responsive pie chart using Recharts.

**Props:**

```javascript
{
  data: Array,         // Chart data with 'name' and 'value'
  title: string,       // Chart title (optional)
  colors: Array,       // Array of hex colors (optional)
  height: number       // Chart height (default: 300)
}
```

**Example:**

```jsx
<PieChart
  title="Category Distribution"
  data={[
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
  ]}
  colors={["#2196f3", "#e91e63"]}
/>
```

---

### DataTable

**Location:** `src/components/Table/DataTable.jsx`

Advanced table with pagination, sorting, and custom rendering.

**Props:**

```javascript
{
  columns: Array,      // Column definitions
  data: Array,         // Table data
  pageSize: number,    // Items per page (default: 10)
  onRowClick: Function // Row click handler (optional)
}
```

**Column Definition:**

```javascript
{
  key: string,         // Data key
  label: string,       // Column header
  sortable: boolean,   // Enable sorting (optional)
  render: Function     // Custom render function (optional)
}
```

**Example:**

```jsx
const columns = [
  { key: "name", label: "Name", sortable: true },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <span className={value === "Active" ? "text-green-600" : "text-red-600"}>
        {value}
      </span>
    ),
  },
];

<DataTable
  columns={columns}
  data={users}
  pageSize={10}
  onRowClick={(row) => console.log(row)}
/>;
```

---

### Navbar

**Location:** `src/components/Navbar/Navbar.jsx`

Top navigation bar with theme toggle and user menu.

**Props:**

```javascript
{
  onMenuClick: Function; // Sidebar toggle handler
}
```

**Features:**

- Theme toggle button
- Notifications indicator
- User profile dropdown
- Logout functionality
- Responsive hamburger menu

---

### Sidebar

**Location:** `src/components/Sidebar/Sidebar.jsx`

Side navigation menu with routing.

**Props:**

```javascript
{
  isOpen: boolean,    // Sidebar open state
  onClose: Function   // Close handler
}
```

**Features:**

- Active link highlighting
- Responsive (drawer on mobile)
- Icon + label navigation items
- Auto-close on mobile after navigation

---

## 🔧 Utility Functions

### formatCurrency

**Location:** `src/utils/helpers.js`

Formats numbers as USD currency.

```javascript
formatCurrency(79.99); // "$79.99"
```

---

### formatDate

**Location:** `src/utils/helpers.js`

Formats ISO date strings.

```javascript
formatDate("2023-11-15"); // "Nov 15, 2023"
```

---

### storage

**Location:** `src/utils/helpers.js`

LocalStorage wrapper with error handling.

```javascript
storage.get("key");
storage.set("key", value);
storage.remove("key");
storage.clear();
```

---

## 🎣 Custom Hooks

### useAuth

**Location:** `src/hooks/useAuth.js`

Access authentication context.

**Returns:**

```javascript
{
  user: Object,
  loading: boolean,
  login: Function,
  logout: Function,
  updateProfile: Function,
  isAuthenticated: Function
}
```

**Example:**

```jsx
import { useAuth } from "./hooks/useAuth";

function MyComponent() {
  const { user, logout } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

---

### useTheme

**Location:** `src/hooks/useTheme.js`

Access theme context.

**Returns:**

```javascript
{
  mode: string,           // 'light' | 'dark'
  toggleTheme: Function,
  setThemeMode: Function
}
```

**Example:**

```jsx
import { useTheme } from "./hooks/useTheme";

function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{mode === "light" ? "🌙" : "☀️"}</button>
  );
}
```

---

## 🌐 Services

### authService

**Location:** `src/services/authService.js`

Authentication operations.

**Methods:**

- `login(email, password)` - Authenticate user
- `register(userData)` - Register new user
- `getCurrentUser()` - Get current user
- `updateProfile(userId, updates)` - Update profile
- `changePassword(userId, oldPassword, newPassword)` - Change password
- `logout()` - Logout user

---

### userService

**Location:** `src/services/userService.js`

User CRUD operations.

**Methods:**

- `getUsers()` - Get all users
- `getUserById(id)` - Get single user
- `createUser(userData)` - Create user
- `updateUser(id, updates)` - Update user
- `deleteUser(id)` - Delete user
- `searchUsers(query)` - Search users
- `getUserStats()` - Get user statistics

---

### productService

**Location:** `src/services/productService.js`

Product CRUD operations.

**Methods:**

- `getProducts()` - Get all products
- `getProductById(id)` - Get single product
- `createProduct(productData)` - Create product
- `updateProduct(id, updates)` - Update product
- `deleteProduct(id)` - Delete product
- `searchProducts(query)` - Search products
- `getProductsByCategory(category)` - Filter by category
- `getProductStats()` - Get product statistics

---

### orderService

**Location:** `src/services/orderService.js`

Order management operations.

**Methods:**

- `getOrders()` - Get all orders
- `getOrderById(id)` - Get single order
- `createOrder(orderData)` - Create order
- `updateOrder(id, updates)` - Update order
- `updateOrderStatus(id, status)` - Update status
- `deleteOrder(id)` - Delete order
- `getOrdersByStatus(status)` - Filter by status
- `getOrderStats()` - Get order statistics
- `getRecentOrders(limit)` - Get recent orders

---

## 🎨 Tailwind CSS Classes Reference

### Common Patterns

**Card Container:**

```jsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-card dark:shadow-card-dark p-6">
  {/* content */}
</div>
```

**Button Primary:**

```jsx
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
  Click Me
</button>
```

**Input Field:**

```jsx
<input className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
```

**Status Badge:**

```jsx
<span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
  Active
</span>
```

---

## 📋 Form Validation Patterns

Using React Hook Form:

```jsx
import { useForm } from "react-hook-form";

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

// In JSX:
<input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email",
    },
  })}
/>;
{
  errors.email && <p className="text-red-500">{errors.email.message}</p>;
}
```

---

**For more examples, check the source code in each component!**

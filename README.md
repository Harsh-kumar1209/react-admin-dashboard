# React Admin Dashboard

A modern, full-featured admin dashboard built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ✅ **Authentication System** - Login page with protected routes
- ✅ **Dark/Light Mode** - Persistent theme switching
- ✅ **Dashboard Analytics** - Statistics cards, charts, and recent orders
- ✅ **Users Management** - Full CRUD operations for users
- ✅ **Products Management** - Complete product inventory system
- ✅ **Orders Management** - Order tracking and status updates
- ✅ **Settings Page** - Profile management and theme preferences
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Clean Architecture** - Modular and reusable components

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **React Hook Form** - Form validation
- **Recharts** - Chart components
- **Lucide React** - Modern icon library
- **Axios** - HTTP client

## 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**

   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🔐 Demo Credentials

Use these credentials to log in:

- **Email:** `admin@example.com`
- **Password:** `admin123`

Alternative credentials:

- **Email:** `john@example.com`
- **Password:** `john123`

## 📁 Project Structure

```
src/
├── components/
│   ├── Cards/
│   │   └── StatCard.jsx          # Reusable stat card component
│   ├── Charts/
│   │   ├── LineChart.jsx         # Line chart component
│   │   ├── BarChart.jsx          # Bar chart component
│   │   └── PieChart.jsx          # Pie chart component
│   ├── Table/
│   │   └── DataTable.jsx         # Reusable data table with pagination
│   ├── Navbar/
│   │   └── Navbar.jsx            # Top navigation bar
│   └── Sidebar/
│       └── Sidebar.jsx           # Side navigation menu
├── layouts/
│   └── MainLayout.jsx            # Main app layout wrapper
├── pages/
│   ├── Login/
│   │   └── Login.jsx             # Login page
│   ├── Dashboard/
│   │   └── Dashboard.jsx         # Main dashboard
│   ├── Users/
│   │   ├── UsersList.jsx         # Users list page
│   │   └── UserForm.jsx          # Add/Edit user form
│   ├── Products/
│   │   ├── ProductsList.jsx      # Products list page
│   │   └── ProductForm.jsx       # Add/Edit product form
│   ├── Orders/
│   │   └── OrdersList.jsx        # Orders list page
│   └── Settings/
│       └── Settings.jsx          # Settings page
├── services/
│   ├── api.js                    # Axios instance
│   ├── authService.js            # Authentication API
│   ├── userService.js            # User CRUD operations
│   ├── productService.js         # Product CRUD operations
│   └── orderService.js           # Order operations
├── context/
│   ├── AuthContext.jsx           # Authentication context
│   └── ThemeContext.jsx          # Theme context
├── hooks/
│   ├── useAuth.js                # Auth hook
│   └── useTheme.js               # Theme hook
├── utils/
│   ├── constants.js              # App constants
│   └── helpers.js                # Utility functions
├── App.jsx                       # Main app component
├── main.jsx                      # App entry point
├── router.jsx                    # Protected routes
└── index.css                     # Global styles
```

## 🎨 Features Overview

### Dashboard

- 4 statistics cards (Users, Revenue, Orders, Visits)
- Line chart for sales overview
- Bar chart for weekly orders
- Pie chart for category distribution
- Recent orders table

### Users Management

- View all users in a searchable table
- Add new users
- Edit existing users
- Delete users
- Role and status management

### Products Management

- Product inventory list
- Add new products
- Edit product details
- Delete products
- Category and stock management
- Automatic status based on stock levels

### Orders Management

- View all orders
- Search and filter orders
- Update order status
- Real-time status updates

### Settings

- Update profile information
- Dark/Light mode toggle
- Theme preferences saved to localStorage

## 🎯 Key Highlights

- **Clean Code** - Well-organized, commented, and maintainable
- **Reusable Components** - DRY principle throughout
- **Mock API** - Simulated backend with realistic delays
- **Form Validation** - React Hook Form integration
- **Protected Routes** - Authentication guards
- **Persistent State** - LocalStorage for auth and theme
- **Responsive UI** - Works on all screen sizes
- **Dark Mode** - Complete dark theme support
- **Modern Icons** - Lucide React icons
- **Smooth Animations** - Tailwind transitions

## 📝 License

MIT License - feel free to use this project for learning or production.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React + Vite + Tailwind CSS

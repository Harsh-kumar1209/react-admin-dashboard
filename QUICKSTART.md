# Quick Start Guide

## 🚀 Getting Started

Your React Admin Dashboard with Tailwind CSS is now ready! Follow these steps to run the application:

### 1. Install Dependencies (Already Done ✅)

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will open automatically at: **http://localhost:3000**

### 3. Login to Dashboard

Use these credentials to access the dashboard:

**Admin Account:**

- Email: `admin@example.com`
- Password: `admin123`

**User Account:**

- Email: `john@example.com`
- Password: `john123`

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Dashboard Features

### 1. **Dashboard Page** (`/dashboard`)

- Statistics cards showing key metrics
- Interactive charts (Line, Bar, Pie)
- Recent orders table
- Fully responsive design

### 2. **Users Management** (`/users`)

- View all users in a searchable table
- Add new users (`/users/add`)
- Edit existing users (`/users/edit/:id`)
- Delete users
- Pagination and sorting

### 3. **Products Management** (`/products`)

- Product inventory list
- Add new products (`/products/add`)
- Edit products (`/products/edit/:id`)
- Delete products
- Stock management with status indicators

### 4. **Orders Management** (`/orders`)

- View all orders
- Filter by status
- Search functionality
- Update order status inline

### 5. **Settings** (`/settings`)

- Update profile information
- Toggle dark/light theme
- Theme preferences (persistent)

## 🎯 Key Features

### ✅ Tailwind CSS Integration

All components are built with **Tailwind CSS** utility classes:

- Responsive design with mobile-first approach
- Dark mode support using Tailwind's `dark:` variant
- Custom color palette in `tailwind.config.js`
- Smooth transitions and animations

### ✅ Dark Mode

- Toggle between light and dark themes
- Persistent theme selection (saved to localStorage)
- Smooth theme transitions
- All components fully support both modes

### ✅ Authentication

- Protected routes requiring login
- JWT token simulation
- Persistent login state
- Automatic redirect on logout

### ✅ Form Validation

- React Hook Form integration
- Client-side validation
- Error messages
- Required field indicators

### ✅ Charts & Analytics

- Recharts library for data visualization
- Line charts for trends
- Bar charts for comparisons
- Pie charts for distributions

### ✅ Responsive Design

- Mobile navigation (hamburger menu)
- Tablet and desktop optimized layouts
- Touch-friendly interfaces
- Adaptive component sizing

## 🎨 Customization

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // ... other shades
      }
    }
  }
}
```

### Modify Routes

Edit `src/utils/constants.js` to change route paths:

```javascript
export const ROUTES = {
  DASHBOARD: "/dashboard",
  USERS: "/users",
  // ... add your routes
};
```

### Add New Pages

1. Create page component in `src/pages/YourPage/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Sidebar/Sidebar.jsx`

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used in this project:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🔧 Troubleshooting

### Port Already in Use

If port 3000 is busy, Vite will automatically use the next available port.

### Dark Mode Not Working

Clear your browser's localStorage and refresh the page.

### Icons Not Showing

Ensure `lucide-react` is installed:

```bash
npm install lucide-react
```

## 📚 Project Structure Highlights

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── layouts/         # Layout wrappers
├── services/        # API services (mock data)
├── context/         # React Context providers
├── hooks/           # Custom React hooks
├── utils/           # Helper functions & constants
└── index.css        # Tailwind imports
```

## 🎓 Learning Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Recharts Documentation](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)

## ✨ Next Steps

1. **Customize the theme** - Update colors in `tailwind.config.js`
2. **Connect real API** - Replace mock services with actual endpoints
3. **Add more features** - Extend functionality as needed
4. **Deploy** - Build and deploy to your hosting platform

---

**Enjoy your new React Admin Dashboard with Tailwind CSS! 🎉**

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CustomThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, PublicRoute } from "./router";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import UsersList from "./pages/Users/UsersList";
import UserForm from "./pages/Users/UserForm";
import ProductsList from "./pages/Products/ProductsList";
import ProductForm from "./pages/Products/ProductForm";
import OrdersList from "./pages/Orders/OrdersList";
import Settings from "./pages/Settings/Settings";

import { ROUTES } from "./utils/constants";

/**
 * Main App Component
 * Sets up routing, contexts, and theme
 */
function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes (Login) */}
            <Route element={<PublicRoute />}>
              <Route path={ROUTES.LOGIN} element={<Login />} />
            </Route>

            {/* Protected Routes (Dashboard and others) */}
            <Route element={<ProtectedRoute />}>
              <Route element={<MainLayout />}>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />

                {/* Users Routes */}
                <Route path={ROUTES.USERS} element={<UsersList />} />
                <Route path={ROUTES.USER_ADD} element={<UserForm />} />
                <Route path={ROUTES.USER_EDIT} element={<UserForm />} />

                {/* Products Routes */}
                <Route path={ROUTES.PRODUCTS} element={<ProductsList />} />
                <Route path={ROUTES.PRODUCT_ADD} element={<ProductForm />} />
                <Route path={ROUTES.PRODUCT_EDIT} element={<ProductForm />} />

                {/* Orders Route */}
                <Route path={ROUTES.ORDERS} element={<OrdersList />} />

                {/* Settings Route */}
                <Route path={ROUTES.SETTINGS} element={<Settings />} />
              </Route>
            </Route>

            {/* Default redirect to dashboard */}
            <Route
              path="/"
              element={<Navigate to={ROUTES.DASHBOARD} replace />}
            />

            {/* 404 - Redirect to dashboard */}
            <Route
              path="*"
              element={<Navigate to={ROUTES.DASHBOARD} replace />}
            />
          </Routes>
        </AuthProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;

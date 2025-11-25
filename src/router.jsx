import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

/**
 * ProtectedRoute Component
 * Wrapper component that redirects to login if user is not authenticated
 */
export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

/**
 * PublicRoute Component
 * Wrapper component that redirects to dashboard if user is already authenticated
 */
export const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return !isAuthenticated() ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

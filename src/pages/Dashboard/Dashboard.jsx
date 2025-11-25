import { useEffect, useState } from "react";
import { Users, DollarSign, ShoppingCart, Eye } from "lucide-react";
import StatCard from "../../components/Cards/StatCard";
import LineChart from "../../components/Charts/LineChart";
import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";
import DataTable from "../../components/Table/DataTable";
import { getRecentOrders, getOrderStats } from "../../services/orderService";
import { getUserStats } from "../../services/userService";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { ORDER_STATUS } from "../../utils/constants";

/**
 * Dashboard Page Component
 * Main dashboard with statistics, charts, and recent orders
 */
const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    revenue: 0,
    orders: 0,
    visits: 0,
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [orderStats, userStats, orders] = await Promise.all([
          getOrderStats(),
          getUserStats(),
          getRecentOrders(5),
        ]);

        setStats({
          users: userStats.total,
          revenue: parseFloat(orderStats.totalRevenue),
          orders: orderStats.total,
          visits: 12543, // Mock data
        });

        setRecentOrders(orders);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Mock data for charts
  const salesData = [
    { name: "Jan", sales: 4000, revenue: 2400 },
    { name: "Feb", sales: 3000, revenue: 1398 },
    { name: "Mar", sales: 2000, revenue: 9800 },
    { name: "Apr", sales: 2780, revenue: 3908 },
    { name: "May", sales: 1890, revenue: 4800 },
    { name: "Jun", sales: 2390, revenue: 3800 },
    { name: "Jul", sales: 3490, revenue: 4300 },
  ];

  const ordersData = [
    { name: "Mon", orders: 65 },
    { name: "Tue", orders: 59 },
    { name: "Wed", orders: 80 },
    { name: "Thu", orders: 81 },
    { name: "Fri", orders: 56 },
    { name: "Sat", orders: 55 },
    { name: "Sun", orders: 40 },
  ];

  const categoryData = [
    { name: "Electronics", value: 400 },
    { name: "Clothing", value: 300 },
    { name: "Food", value: 200 },
    { name: "Books", value: 150 },
    { name: "Sports", value: 100 },
  ];

  // Table columns
  const columns = [
    {
      key: "id",
      label: "Order ID",
      sortable: true,
    },
    {
      key: "customerName",
      label: "Customer",
      sortable: true,
    },
    {
      key: "product",
      label: "Product",
      sortable: true,
    },
    {
      key: "total",
      label: "Total",
      sortable: true,
      render: (value) => formatCurrency(value),
    },
    {
      key: "status",
      label: "Status",
      render: (value) => {
        const statusColors = {
          [ORDER_STATUS.COMPLETED]:
            "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
          [ORDER_STATUS.PENDING]:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
          [ORDER_STATUS.PROCESSING]:
            "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
          [ORDER_STATUS.CANCELLED]:
            "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
        };
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[value]}`}
          >
            {value}
          </span>
        );
      },
    },
    {
      key: "orderDate",
      label: "Date",
      sortable: true,
      render: (value) => formatDate(value),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.users}
          icon={Users}
          color="primary"
          percentage={12.5}
          subtitle="vs last month"
        />
        <StatCard
          title="Revenue"
          value={formatCurrency(stats.revenue)}
          icon={DollarSign}
          color="success"
          percentage={8.2}
          subtitle="vs last month"
        />
        <StatCard
          title="Orders"
          value={stats.orders}
          icon={ShoppingCart}
          color="warning"
          percentage={-3.1}
          subtitle="vs last month"
        />
        <StatCard
          title="Page Visits"
          value={stats.visits.toLocaleString()}
          icon={Eye}
          color="info"
          percentage={15.3}
          subtitle="vs last month"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart
          title="Sales Overview"
          data={salesData}
          lines={[
            { dataKey: "sales", stroke: "#2196f3", name: "Sales" },
            { dataKey: "revenue", stroke: "#4caf50", name: "Revenue" },
          ]}
          xKey="name"
          height={300}
        />
        <BarChart
          title="Orders This Week"
          data={ordersData}
          bars={[{ dataKey: "orders", fill: "#ff9800", name: "Orders" }]}
          xKey="name"
          height={300}
        />
      </div>

      {/* Pie Chart and Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <PieChart
            title="Sales by Category"
            data={categoryData}
            height={300}
          />
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card dark:shadow-card-dark p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Orders
            </h3>
            <DataTable columns={columns} data={recentOrders} pageSize={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

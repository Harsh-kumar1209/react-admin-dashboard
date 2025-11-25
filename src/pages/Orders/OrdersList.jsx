import { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";
import DataTable from "../../components/Table/DataTable";
import { getOrders, updateOrderStatus } from "../../services/orderService";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { ORDER_STATUS } from "../../utils/constants";

/**
 * OrdersList Page Component
 * Displays list of all orders with status management
 */
const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Fetch orders
  useEffect(() => {
    fetchOrders();
  }, []);

  // Filter orders based on search and status
  useEffect(() => {
    let filtered = orders;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.product.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    setFilteredOrders(filtered);
  }, [searchTerm, statusFilter, orders]);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
      setFilteredOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      fetchOrders();
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status");
    }
  };

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
      key: "email",
      label: "Email",
      sortable: true,
    },
    {
      key: "product",
      label: "Product",
      sortable: true,
    },
    {
      key: "quantity",
      label: "Qty",
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
      sortable: true,
      render: (value, row) => {
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
          <select
            value={value}
            onChange={(e) => handleStatusChange(row.id, e.target.value)}
            className={`px-2 py-1 rounded-full text-xs font-medium cursor-pointer border-0 ${statusColors[value]}`}
          >
            {Object.values(ORDER_STATUS).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        );
      },
    },
    {
      key: "orderDate",
      label: "Order Date",
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
          Orders
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage and track customer orders
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card dark:shadow-card-dark p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by order ID, customer, or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="w-5 h-5 text-gray-400" />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Statuses</option>
              {Object.values(ORDER_STATUS).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <DataTable columns={columns} data={filteredOrders} pageSize={10} />
    </div>
  );
};

export default OrdersList;

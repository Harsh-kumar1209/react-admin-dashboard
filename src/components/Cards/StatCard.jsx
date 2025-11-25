import { TrendingUp, TrendingDown } from "lucide-react";

/**
 * StatCard Component
 * Reusable card component for displaying statistics
 *
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Main value to display
 * @param {string} props.icon - Icon component
 * @param {string} props.color - Color theme (primary, secondary, success, error, warning, info)
 * @param {number} props.percentage - Percentage change (optional)
 * @param {string} props.subtitle - Additional subtitle text (optional)
 */
const StatCard = ({
  title,
  value,
  icon: Icon,
  color = "primary",
  percentage,
  subtitle,
}) => {
  const isPositive = percentage >= 0;

  const colorClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-pink-500 text-white",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-orange-500 text-white",
    info: "bg-cyan-500 text-white",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card dark:shadow-card-dark p-6 h-full">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white my-2">
            {value}
          </h3>

          {percentage !== undefined && (
            <div className="flex items-center mt-2">
              {isPositive ? (
                <TrendingUp className="w-5 h-5 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500 mr-1" />
              )}
              <span
                className={`text-sm font-semibold ${
                  isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                {Math.abs(percentage)}%
              </span>
              {subtitle && (
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                  {subtitle}
                </span>
              )}
            </div>
          )}
        </div>

        <div
          className={`w-14 h-14 rounded-full ${colorClasses[color]} flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;

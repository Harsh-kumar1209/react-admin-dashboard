import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * PieChart Component
 * Reusable pie chart component using Recharts
 *
 * @param {Object} props
 * @param {Array} props.data - Chart data array with 'name' and 'value' properties
 * @param {string} props.title - Chart title
 * @param {Array} props.colors - Array of colors for pie slices
 * @param {number} props.height - Chart height (default: 300)
 */
const PieChart = ({ data = [], title, colors = [], height = 300 }) => {
  const defaultColors = [
    "#2196f3", // blue
    "#e91e63", // pink
    "#4caf50", // green
    "#ff9800", // orange
    "#f44336", // red
    "#00bcd4", // cyan
  ];

  const chartColors = colors.length > 0 ? colors : defaultColors;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card dark:shadow-card-dark p-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
      )}
      <div className="w-full" style={{ height }}>
        <ResponsiveContainer>
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartColors[index % chartColors.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "rgb(17, 24, 39)" }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * LineChart Component
 * Reusable line chart component using Recharts
 *
 * @param {Object} props
 * @param {Array} props.data - Chart data array
 * @param {string} props.title - Chart title
 * @param {Array} props.lines - Array of line configurations
 * @param {string} props.xKey - Key for X-axis data
 * @param {number} props.height - Chart height (default: 300)
 */
const LineChart = ({
  data = [],
  title,
  lines = [],
  xKey = "name",
  height = 300,
}) => {
  const defaultLines = [{ dataKey: "value", stroke: "#2196f3", name: "Value" }];

  const lineConfigs = lines.length > 0 ? lines : defaultLines;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-card dark:shadow-card-dark p-6">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
      )}
      <div className="w-full" style={{ height }}>
        <ResponsiveContainer>
          <RechartsLineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              className="stroke-gray-200 dark:stroke-gray-700"
            />
            <XAxis
              dataKey={xKey}
              className="text-xs text-gray-600 dark:text-gray-400"
            />
            <YAxis className="text-xs text-gray-600 dark:text-gray-400" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(229, 231, 235)",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "rgb(17, 24, 39)" }}
            />
            <Legend />
            {lineConfigs.map((line, index) => (
              <Line
                key={index}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.stroke}
                strokeWidth={2}
                name={line.name}
                activeDot={{ r: 6 }}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;

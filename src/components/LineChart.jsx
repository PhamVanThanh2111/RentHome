import PropTypes from "prop-types";

const LineChart = ({
  data,
  title,
  color = "#11928f",
  timeframe = "This Week",
}) => {
  const maxValue = Math.max(...data.map((item) => item.value));
  const minValue = Math.min(...data.map((item) => item.value));
  const range = maxValue - minValue;

  // Generate SVG path for the line
  const generatePath = () => {
    const width = 300;
    const height = 120;
    const padding = 20;

    const points = data.map((item, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.length - 1);
      const y =
        height -
        padding -
        ((item.value - minValue) / range) * (height - 2 * padding);
      return `${x},${y}`;
    });

    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#11928f]">
          <option>{timeframe}</option>
          <option>Last Week</option>
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      <div className="relative">
        <svg
          width="100%"
          height="140"
          viewBox="0 0 300 140"
          className="overflow-visible"
        >
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="20"
              y1={20 + (i * 100) / 4}
              x2="280"
              y2={20 + (i * 100) / 4}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}

          {/* Area under the curve */}
          <defs>
            <linearGradient
              id={`gradient-${title}`}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <path
            d={`${generatePath()} L 280,120 L 20,120 Z`}
            fill={`url(#gradient-${title})`}
            stroke="none"
          />

          {/* Main line */}
          <path
            d={generatePath()}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data points */}
          {data.map((item, index) => {
            const x = 20 + (index * 260) / (data.length - 1);
            const y = 120 - 20 - ((item.value - minValue) / range) * 80;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill={color}
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-2 px-5">
          {data.map((item, index) => (
            <span key={index} className="text-xs text-gray-500">
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  timeframe: PropTypes.string,
};

export default LineChart;

import PropTypes from "prop-types";

const CircularProgress = ({
  percentage,
  title,
  subtitle,
  successLabel,
  failLabel,
  color = "#11928f",
}) => {
  const radius = 60;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>

      <div className="flex flex-col items-center">
        <div className="relative">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            {/* Background circle */}
            <circle
              stroke="#e5e7eb"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            {/* Progress circle */}
            <circle
              stroke={color}
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-all duration-300 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">
              {percentage}%
            </span>
            <span className="text-xs text-gray-500">{subtitle}</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-4">
          <div className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full mr-2`}
              style={{ backgroundColor: color }}
            />
            <span className="text-sm text-gray-600">{successLabel}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2" />
            <span className="text-sm text-gray-600">{failLabel}</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-2">
          *Average has been counted carefully
        </p>
      </div>
    </div>
  );
};

CircularProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  successLabel: PropTypes.string.isRequired,
  failLabel: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default CircularProgress;

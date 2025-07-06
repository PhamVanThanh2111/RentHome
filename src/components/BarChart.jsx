import PropTypes from "prop-types";

const BarChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#11928f]">
          <option>This week</option>
          <option>Last week</option>
          <option>This month</option>
        </select>
      </div>

      <div className="flex items-end justify-between h-48 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full flex items-end justify-center mb-2"
              style={{ height: "160px" }}
            >
              <div
                className="bg-[#11928f] rounded-t-md w-8 transition-all duration-300 hover:bg-[#0e7a77]"
                style={{
                  height: `${(item.value / maxValue) * 160}px`,
                  minHeight: "4px",
                }}
              />
            </div>
            <span className="text-xs text-gray-600 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default BarChart;

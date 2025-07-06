import PropTypes from "prop-types";

const StatsCard = ({
  icon,
  title,
  value,
  iconBg = "bg-gray-100",
  iconColor = "text-gray-600",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center">
        <div className={`${iconBg} ${iconColor} p-3 rounded-lg mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  iconBg: PropTypes.string,
  iconColor: PropTypes.string,
};

export default StatsCard;

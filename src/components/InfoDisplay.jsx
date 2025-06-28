import PropTypes from "prop-types";

const InfoDisplay = ({ icon, label, value, className = "" }) => {
  return (
    <div className={`flex items-start space-x-3 ${className}`}>
      <div className="flex-shrink-0 mt-1">
        <span className="text-gray-400">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600 break-words">
          {value || "Not specified"}
        </p>
      </div>
    </div>
  );
};

InfoDisplay.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default InfoDisplay;

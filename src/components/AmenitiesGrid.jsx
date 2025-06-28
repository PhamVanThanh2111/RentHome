import PropTypes from "prop-types";

const AmenitiesGrid = ({ amenities }) => {
  const amenityIcons = {
    "Air conditioning": "❄️",
    Kitchen: "🍳",
    Wifi: "📶",
    Parking: "🚗",
    "Private bathroom": "🚿",
    Balcony: "🏠",
    "Washing machine": "🧺",
    TV: "📺",
    Heating: "🔥",
    "Hair dryer": "💨",
    Iron: "👔",
    "Smoke alarm": "🚨",
    "First aid kit": "🏥",
    "Fire extinguisher": "🧯",
    Essentials: "🧴",
    Shampoo: "🧴",
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Amenities</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-xl">{amenityIcons[amenity] || "✓"}</span>
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

AmenitiesGrid.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AmenitiesGrid;

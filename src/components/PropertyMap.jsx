import PropTypes from "prop-types";

const PropertyMap = ({ location, coordinates }) => {
  // Use coordinates if provided, otherwise use default center
  const mapCenter = coordinates || { lat: 23.8103, lng: 90.4125 }; // Default to Dhaka center

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Where you'll be
      </h3>
      <div className="relative">
        {/* Mock Map - In real app, use Google Maps or Mapbox */}
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Map"
            className="w-full h-full object-cover"
            style={{
              filter: "hue-rotate(120deg) saturate(0.8)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#11928f] text-white px-3 py-1 rounded-full text-sm font-medium">
              📍 {location}
            </div>
          </div>
          {/* Show coordinates if provided */}
          {coordinates && (
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-600 mt-4">{location}</p>
      {coordinates && (
        <p className="text-sm text-gray-500 mt-2">
          Coordinates: {coordinates.lat.toFixed(6)},{" "}
          {coordinates.lng.toFixed(6)}
        </p>
      )}
    </div>
  );
};

PropertyMap.propTypes = {
  location: PropTypes.string.isRequired,
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

export default PropertyMap;

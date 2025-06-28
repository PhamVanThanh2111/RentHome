import PropTypes from "prop-types";

const PropertyListCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4 mb-4">
      <div className="flex gap-4">
        {/* Property Image */}
        <div className="flex-shrink-0">
          <img
            src={property.image || "/placeholder.svg?height=150&width=200"}
            alt={property.title}
            className="w-48 h-36 object-cover rounded-lg"
          />
        </div>

        {/* Property Details */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="bg-[#11928f] text-white text-xs px-2 py-1 rounded">
                RECOMMENDED
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                {property.title}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#11928f]">
                ৳{property.price.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">Per Night</div>
            </div>
          </div>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(property.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  } fill-current`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {property.rating} ({property.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-3">{property.location}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {property.amenities?.map((amenity, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {amenity}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {property.distance}
            </div>
            <button className="bg-[#11928f] hover:bg-[#0e7a77] text-white px-6 py-2 rounded-md font-medium transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyListCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string),
    distance: PropTypes.string,
  }).isRequired,
};

export default PropertyListCard;

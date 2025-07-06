import PropTypes from "prop-types";

const PropertyListingCard = ({ property }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        } fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={property.image || "/placeholder.svg?height=150&width=250"}
          alt={property.title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-50">
            <svg
              className="w-4 h-4 text-gray-400 hover:text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
          {property.title}
        </h3>

        <div className="space-y-2 mb-3">
          <div className="flex items-center text-xs text-gray-600">
            <span className="mr-1">🏢</span>
            <span>Type: {property.type}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <span className="mr-1">🏠</span>
            <span>{property.facility}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <span className="mr-1">👥</span>
            <span>{property.capacity}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {renderStars(property.rating)}
            <span className="text-xs text-gray-500 ml-1">
              ({property.reviews})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-[#11928f]">
              ৳{property.price.toLocaleString()}
            </span>
            <div className="text-xs text-gray-500">{property.period}</div>
          </div>
          <button className="text-xs text-[#11928f] hover:text-[#0e7a77] font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

PropertyListingCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    facility: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyListingCard;

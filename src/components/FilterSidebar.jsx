import { useState } from "react";
import PropTypes from "prop-types";

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 50000]);

  const handlePriceChange = (e) => {
    const value = Number.parseInt(e.target.value);
    setPriceRange([0, value]);
    onFilterChange("priceRange", [0, value]);
  };

  const handleCheckboxChange = (category, value) => {
    const currentValues = filters[category] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    onFilterChange(category, newValues);
  };

  return (
    <div className="w-80 bg-white p-6 rounded-lg shadow-sm border h-fit">
      {/* Availability */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Availability</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Check-in</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Check-out
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
            />
          </div>
        </div>
        <button className="w-full mt-3 bg-[#11928f] text-white py-2 rounded-md hover:bg-[#0e7a77] transition-colors">
          Check Availability
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="50000"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>৳0</span>
            <span>৳{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Popular Filters */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Popular Filters</h3>
        <div className="space-y-2">
          {["Guest", "Ac", "Non Ac", "Wifi", "Parking", "Kitchen"].map(
            (filter) => (
              <label key={filter} className="flex items-center">
                <input
                  type="checkbox"
                  checked={(filters.popular || []).includes(filter)}
                  onChange={() => handleCheckboxChange("popular", filter)}
                  className="mr-2 text-[#11928f] focus:ring-[#11928f]"
                />
                <span className="text-sm text-gray-700">{filter}</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Room Facilities */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Room Facilities</h3>
        <div className="space-y-2">
          {[
            "Kitchen",
            "Balcony",
            "Private bathroom",
            "Air conditioning",
            "Heating",
            "Workspace",
          ].map((facility) => (
            <label key={facility} className="flex items-center">
              <input
                type="checkbox"
                checked={(filters.roomFacilities || []).includes(facility)}
                onChange={() =>
                  handleCheckboxChange("roomFacilities", facility)
                }
                className="mr-2 text-[#11928f] focus:ring-[#11928f]"
              />
              <span className="text-sm text-gray-700">{facility}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Facilities</h3>
        <div className="space-y-2">
          {[
            "Parking",
            "Gym",
            "Pool",
            "Restaurant",
            "Spa",
            "Business center",
            "Pet friendly",
            "Laundry service",
          ].map((facility) => (
            <label key={facility} className="flex items-center">
              <input
                type="checkbox"
                checked={(filters.facilities || []).includes(facility)}
                onChange={() => handleCheckboxChange("facilities", facility)}
                className="mr-2 text-[#11928f] focus:ring-[#11928f]"
              />
              <span className="text-sm text-gray-700">{facility}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Rating */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Property Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="checkbox"
                checked={(filters.rating || []).includes(rating)}
                onChange={() => handleCheckboxChange("rating", rating)}
                className="mr-2 text-[#11928f] focus:ring-[#11928f]"
              />
              <div className="flex items-center">
                {[...Array(rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-700">
                  {rating} stars
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Highly Rated Features */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">
          Highly Rated Features
        </h3>
        <div className="space-y-2">
          {["Cleanliness", "Location", "Value", "Service", "Comfort"].map(
            (feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={(filters.features || []).includes(feature)}
                  onChange={() => handleCheckboxChange("features", feature)}
                  className="mr-2 text-[#11928f] focus:ring-[#11928f]"
                />
                <span className="text-sm text-gray-700">{feature}</span>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

FilterSidebar.propTypes = {
  filters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterSidebar;

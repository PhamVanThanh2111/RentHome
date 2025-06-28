import { useState } from "react";
import PropTypes from "prop-types";

const SearchHeader = ({ initialSearchData, onSearch }) => {
  const [searchData, setSearchData] = useState(initialSearchData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchData);
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            FIND YOUR <span className="italic text-yellow-300">incredible</span>{" "}
            STAY
          </h1>
          <p className="text-white/90">Search for the perfect place to stay</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-[#11928f]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Where
                </span>
              </label>
              <input
                type="text"
                placeholder="Dhaka/Gulshan"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
                value={searchData.location}
                onChange={(e) =>
                  setSearchData({ ...searchData, location: e.target.value })
                }
              />
            </div>

            {/* Check In */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-in
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
                value={searchData.checkIn}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkIn: e.target.value })
                }
              />
            </div>

            {/* Check Out */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-out
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
                value={searchData.checkOut}
                onChange={(e) =>
                  setSearchData({ ...searchData, checkOut: e.target.value })
                }
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Guests
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
                value={searchData.guests}
                onChange={(e) =>
                  setSearchData({ ...searchData, guests: e.target.value })
                }
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4+ Adults</option>
              </select>
            </div>

            {/* Rooms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rooms
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
                value={searchData.rooms}
                onChange={(e) =>
                  setSearchData({ ...searchData, rooms: e.target.value })
                }
              >
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
                <option>4+ Rooms</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#11928f] hover:bg-[#0e7a77] text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

SearchHeader.propTypes = {
  initialSearchData: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchHeader;

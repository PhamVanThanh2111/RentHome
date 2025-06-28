import { useState } from "react";
import PropTypes from "prop-types";

const BookingForm = ({ property }) => {
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2 Adults",
    rooms: "1 Room",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", bookingData);
    alert("Booking request submitted!");
  };

  const calculateTotal = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * property.price : 0;
  };

  const nights = calculateTotal() / (property.price || 1);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <div className="mb-4">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-[#11928f]">
            ৳{property.price?.toLocaleString()}
          </span>
          <span className="text-gray-500 ml-1">/night</span>
        </div>
        <div className="flex items-center mt-1">
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
            <span className="text-sm text-gray-600 ml-2">
              {property.rating} ({property.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-in
            </label>
            <input
              type="date"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
              value={bookingData.checkIn}
              onChange={(e) =>
                setBookingData({ ...bookingData, checkIn: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-out
            </label>
            <input
              type="date"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
              value={bookingData.checkOut}
              onChange={(e) =>
                setBookingData({ ...bookingData, checkOut: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Guests
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
            value={bookingData.guests}
            onChange={(e) =>
              setBookingData({ ...bookingData, guests: e.target.value })
            }
          >
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4+ Adults</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rooms
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
            value={bookingData.rooms}
            onChange={(e) =>
              setBookingData({ ...bookingData, rooms: e.target.value })
            }
          >
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
            <option>4+ Rooms</option>
          </select>
        </div>

        {calculateTotal() > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                ৳{property.price?.toLocaleString()} × {nights} nights
              </span>
              <span>৳{calculateTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>৳{calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#11928f] hover:bg-[#0e7a77] text-white font-medium py-3 rounded-md transition-colors"
        >
          Reserve Now
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-3">
        You won't be charged yet
      </p>
    </div>
  );
};

BookingForm.propTypes = {
  property: PropTypes.object.isRequired,
};

export default BookingForm;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={ROUTES.HOME} className="flex items-center">
              <div className="bg-[#11928f] px-4 py-2 rounded-lg">
                <span className="text-white text-xl font-bold">ToletX</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#"
              className="text-gray-700 hover:text-[#11928f] font-medium"
            >
              Rent with ToletX
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-[#11928f] font-medium"
            >
              Property Categories
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-[#11928f] font-medium"
            >
              Ideas
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-[#11928f] font-medium"
            >
              Office Shifting Services
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute -top-2 -right-2">
                3
              </span>
              <button className="p-2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5-5-5h5v-12"
                  />
                </svg>
              </button>
            </div>

            <button className="p-2">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            <Link to="#" className="text-[#11928f] font-medium">
              Become a Partner
            </Link>

            <div
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
              onClick={handleProfileClick}
            >
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700 font-medium hover:text-[#11928f]">
                Ariful
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const PartnerSidebar = ({ activeSection, onSectionChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (sectionId === "dashboard") {
      navigate("/dashboard-partner");
    } else if (sectionId === "my-property-listings") {
      navigate("/partner-listings");
    } else {
      // For other sections, navigate to profile page with the section
      navigate("/profile", { state: { activeSection: sectionId } });
    }
  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "🏠",
    },
  ];

  // Determine the current active section based on the current route
  const getCurrentActiveSection = () => {
    if (location.pathname === "/dashboard-partner") {
      return "dashboard";
    } else if (location.pathname === "/partner-listings") {
      return "my-property-listings";
    }
    return activeSection;
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow-sm border h-fit sticky top-4">
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">My Profile</h3>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                getCurrentActiveSection() === item.id
                  ? "bg-[#11928f] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

PartnerSidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onSectionChange: PropTypes.func.isRequired,
};

export default PartnerSidebar;

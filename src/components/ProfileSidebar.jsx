import PropTypes from "prop-types";

const ProfileSidebar = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "🏠",
    },
    {
      id: "profile-info",
      label: "Profile Informations",
      icon: "👤",
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: "🔔",
    },
    {
      id: "payment-history",
      label: "History (Payment, Rental)",
      icon: "📋",
    },
    {
      id: "account-settings",
      label: "Account Settings",
      icon: "⚙️",
    },
    {
      id: "privacy-settings",
      label: "Privacy Settings",
      icon: "🔒",
    },
    {
      id: "language-region",
      label: "Language & Region",
      icon: "🌐",
    },
    {
      id: "referral-program",
      label: "Referral Program",
      icon: "🎁",
    },
  ];

  return (
    <div className="w-64 bg-white rounded-lg shadow-sm border h-fit sticky top-4">
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">My Profile</h3>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                activeSection === item.id
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

ProfileSidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onSectionChange: PropTypes.func.isRequired,
};

export default ProfileSidebar;

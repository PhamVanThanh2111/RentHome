import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnerSidebar from "../components/PartnerSidebar";
import StatsCard from "../components/StatsCard";
import LineChart from "../components/LineChart";
import PropertyListingCard from "../components/PropertyListingCard";

const DashboardPartnerPage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Mock data for partner dashboard
  const statsData = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Total Listing",
      value: "12",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Total Earning",
      value: "৳22,030.00",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      title: "Your Property Views",
      value: "170",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Total Rent",
      value: "17",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "AVG Number of Reviews",
      value: "504",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Years of Membership",
      value: "01",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const totalOverviewData = [
    { label: "Mon", value: 300 },
    { label: "Tue", value: 450 },
    { label: "Wed", value: 320 },
    { label: "Thu", value: 380 },
    { label: "Fri", value: 420 },
    { label: "Sat", value: 350 },
    { label: "Sun", value: 280 },
  ];

  const earningStrategyData = [
    { label: "Week 1", value: 15000 },
    { label: "Week 2", value: 18000 },
    { label: "Week 3", value: 22000 },
    { label: "Week 4", value: 19000 },
  ];

  const propertyListings = [
    {
      id: 1,
      title: "Modular Office Buildings - Wernick Group Dhaka",
      type: "Private Office",
      facility: "Garage Facility",
      capacity: "800 People Space",
      rating: 4.5,
      reviews: 128,
      price: 11200,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 2,
      title: "Private Office Space with Playstay Rawsanchora S/A",
      type: "Private Office",
      facility: "Garage Facility",
      capacity: "300 People Space",
      rating: 4.2,
      reviews: 89,
      price: 11000,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 3,
      title: "Maternal and Child Health Training Institute in Dhaka Corp.",
      type: "Institute",
      facility: "Garage Facility",
      capacity: "5000 Student Space",
      rating: 4.8,
      reviews: 256,
      price: 11100,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 4,
      title: "IEB - The Institution of Engineers, Dhaka, Bangladesh",
      type: "Institute",
      facility: "Garage Facility",
      capacity: "1000 Student Space",
      rating: 4.6,
      reviews: 178,
      price: 1700,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 5,
      title: "King Room with Lake View at Dhaka Boathouse Bangladesh",
      type: "Hotel",
      facility: "Garage Facility",
      capacity: "Secure for Girls & Family Stay",
      rating: 4.7,
      reviews: 145,
      price: 11200,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 6,
      title: "Modern Prefab Boathouse Designed for the Muskoka Region",
      type: "Boathouse",
      facility: "Garage Facility",
      capacity: "Secure for Girls & Family Stay",
      rating: 4.4,
      reviews: 98,
      price: 11000,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 7,
      title: "Community Center in Gulshan - Community Center Bangladesh",
      type: "Community Center",
      facility: "Garage Facility",
      capacity: "Secure for Girls & Family Stay",
      rating: 4.5,
      reviews: 167,
      price: 11100,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 8,
      title: "Community Center in Uttara - VIP Community Uttara, Dhaka",
      type: "Community Center",
      facility: "No Garage Facility",
      capacity: "Secure for Girls & Family Stay",
      rating: 4.3,
      reviews: 123,
      price: 1700,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 9,
      title: "Beneath our feet: improving estimates of BD land value",
      type: "Land",
      facility: "Emergency Govt Service",
      capacity: "33 Decimal Decimal",
      rating: 4.6,
      reviews: 89,
      price: 11200,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 10,
      title: "Buying a Buyable Land in New South Homes Dhaka",
      type: "Land",
      facility: "Emergency Govt Service",
      capacity: "33 Decimal Decimal",
      rating: 4.2,
      reviews: 76,
      price: 11000,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 11,
      title: "Dhaka Ponds Be Gone! - Wildlife Ponds",
      type: "Pond",
      facility: "Lorem Ipsum Text",
      capacity: "Lorem Ipsum Simple Dummy Text",
      rating: 4.4,
      reviews: 134,
      price: 11100,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      id: 12,
      title: "Boghani Ponds Be Gone! - Wildlife Ponds - Humane Gardener",
      type: "Pond",
      facility: "Lorem Ipsum Text",
      capacity: "Lorem Ipsum Simple Dummy Text",
      rating: 4.1,
      reviews: 92,
      price: 1700,
      period: "Per Night Stay",
      image: "/placeholder.svg?height=150&width=250",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <PartnerSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.svg?height=80&width=80"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Masum Rana
                  </h2>
                  <div className="flex items-center text-gray-600 mt-1 space-x-4">
                    <span className="flex items-center">
                      <span className="mr-1">📍</span>
                      Dhaka
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📞</span>
                      PIN: 1451225107
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-8">
              {/* Dashboard Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {statsData.map((stat, index) => (
                  <StatsCard
                    key={index}
                    icon={stat.icon}
                    title={stat.title}
                    value={stat.value}
                    iconBg={stat.iconBg}
                    iconColor={stat.iconColor}
                  />
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LineChart
                  data={totalOverviewData}
                  title="Total Overview"
                  color="#f59e0b"
                  timeframe="This Week"
                />
                <LineChart
                  data={earningStrategyData}
                  title="Earning Strategy"
                  color="#10b981"
                  timeframe="This Month"
                />
              </div>

              {/* Property Listings */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Your Total Listing
                  </h2>
                  <select className="text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#11928f]">
                    <option>Category</option>
                    <option>Office</option>
                    <option>Hotel</option>
                    <option>Land</option>
                    <option>Community Center</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {propertyListings.map((property) => (
                    <PropertyListingCard
                      key={property.id}
                      property={property}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPartnerPage;

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";
import StatsCard from "../components/StatsCard";
import BarChart from "../components/BarChart";
import CircularProgress from "../components/CircularProgress";

const MyDashboardPage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Mock data for dashboard
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
      title: "Lorem Ipsum",
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
      title: "Total Expenses",
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
      title: "Lorem Ipsum",
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
      title: "Rent History",
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
      title: "Your Given Reviews",
      value: "25",
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
      value: "02",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const expensesData = [
    { label: "Mon", value: 15 },
    { label: "Tue", value: 25 },
    { label: "Wed", value: 20 },
    { label: "Thu", value: 10 },
    { label: "Fri", value: 30 },
    { label: "Sat", value: 18 },
    { label: "Sun", value: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <ProfileSidebar
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Bar Chart */}
                <div className="lg:col-span-1">
                  <BarChart data={expensesData} title="Your Expenses" />
                </div>

                {/* Payment Progress */}
                <div className="lg:col-span-1">
                  <CircularProgress
                    percentage={40}
                    title="Payment"
                    subtitle="Average Payment"
                    successLabel="Successful"
                    failLabel="Failed"
                    color="#11928f"
                  />
                </div>

                {/* Performance Progress */}
                <div className="lg:col-span-1">
                  <CircularProgress
                    percentage={65}
                    title="Performance"
                    subtitle="Average Performance"
                    successLabel="Successful"
                    failLabel="Pending"
                    color="#3b82f6"
                  />
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

export default MyDashboardPage;

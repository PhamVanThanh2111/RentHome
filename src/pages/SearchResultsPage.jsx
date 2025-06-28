import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader";
import FilterSidebar from "../components/FilterSidebar";
import PropertyListCard from "../components/PropertyListCard";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

const SearchResultsPage = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState({
    location: "Dhaka/Gulshan",
    checkIn: "",
    checkOut: "",
    guests: "2 Adults",
    rooms: "1 Room",
  });

  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    popular: [],
    roomFacilities: [],
    facilities: [],
    rating: [],
    features: [],
  });

  const [properties, setProperties] = useState([]);

  // Mock properties data
  const mockProperties = [
    {
      id: 1,
      title: "Dharmabad Central Air Hotel Grand Circle Inn Dhaka - 1002",
      location: "Dharmabad, Dhaka",
      price: 3200,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["AC", "Wifi", "Parking", "Kitchen"],
      distance: "2.5 km from city center",
    },
    {
      id: 2,
      title: "Beautiful Family Friendly Home with 3 Bedrooms Banasundari 6/A",
      location: "Banasundari, Dhaka",
      price: 1100,
      rating: 4.2,
      reviews: 89,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Kitchen", "Balcony", "Parking"],
      distance: "1.8 km from city center",
    },
    {
      id: 3,
      title: "Safe Couple Room with private bath in Bonani Chapman Bari",
      location: "Bonani, Dhaka",
      price: 2600,
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Private bathroom", "AC", "Wifi"],
      distance: "3.2 km from city center",
    },
    {
      id: 4,
      title: "Safe Couple Room Microwave House House Majhir 2008 Dhaka - 1205",
      location: "Majhir, Dhaka",
      price: 1800,
      rating: 4.3,
      reviews: 94,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Microwave", "AC", "Wifi", "Kitchen"],
      distance: "4.1 km from city center",
    },
    {
      id: 5,
      title: "Dharmabad Hotel Grand Circle Inn Dhaka - 1100",
      location: "Dharmabad, Dhaka",
      price: 1200,
      rating: 4.1,
      reviews: 67,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["AC", "Wifi", "Restaurant"],
      distance: "2.8 km from city center",
    },
    {
      id: 6,
      title: "Beautiful Family Friendly Home with 3 Bedrooms Banasundari 6/A",
      location: "Banasundari, Dhaka",
      price: 900,
      rating: 4.0,
      reviews: 45,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Kitchen", "Balcony", "Parking", "Garden"],
      distance: "1.5 km from city center",
    },
    {
      id: 7,
      title: "Safe Couple Room with private bath in Bonani Chapman Bari",
      location: "Bonani, Dhaka",
      price: 2000,
      rating: 4.6,
      reviews: 112,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Private bathroom", "AC", "Wifi", "Balcony"],
      distance: "3.0 km from city center",
    },
    {
      id: 8,
      title: "Safe Couple Room Microwave House House Majhir 2008 Dhaka - 1205",
      location: "Majhir, Dhaka",
      price: 1600,
      rating: 4.4,
      reviews: 78,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Microwave", "AC", "Wifi", "Kitchen", "Parking"],
      distance: "3.8 km from city center",
    },
    {
      id: 9,
      title: "Safe Couple Room with private bath in Bonani Chapman Bari",
      location: "Bonani, Dhaka",
      price: 3000,
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Private bathroom", "AC", "Wifi", "Kitchen"],
      distance: "2.2 km from city center",
    },
    {
      id: 10,
      title: "Safe Couple Room Microwave House House Majhir 2008 Dhaka - 1205",
      location: "Majhir, Dhaka",
      price: 1500,
      rating: 4.2,
      reviews: 56,
      image: "/placeholder.svg?height=150&width=200",
      amenities: ["Microwave", "AC", "Wifi"],
      distance: "4.5 km from city center",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Office",
      count: 150,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Coworking",
      count: 89,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Land",
      count: 234,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "House",
      count: 567,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Hotel",
      count: 123,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  useEffect(() => {
    // Get search params from location state if available
    if (location.state?.searchData) {
      setSearchData(location.state.searchData);
    }
    setProperties(mockProperties);
  }, [location.state]);

  const handleSearch = (newSearchData) => {
    setSearchData(newSearchData);
    // Here you would typically make an API call to search properties
    console.log("Searching with:", newSearchData);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
    // Here you would filter the properties based on the filters
    console.log("Filter changed:", filterType, value);
  };

  const filteredProperties = properties.filter((property) => {
    // Apply price filter
    if (property.price > filters.priceRange[1]) return false;

    // Apply rating filter
    if (
      filters.rating.length > 0 &&
      !filters.rating.includes(Math.floor(property.rating))
    )
      return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchHeader initialSearchData={searchData} onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {filteredProperties.length} properties found in{" "}
                {searchData.location}
              </h2>
              <p className="text-gray-600">
                Showing results for {searchData.checkIn} - {searchData.checkOut}
              </p>
            </div>

            {/* Property List */}
            <div className="space-y-4 mb-8">
              {filteredProperties.map((property) => (
                <PropertyListCard key={property.id} property={property} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-[#11928f] hover:bg-[#0e7a77] text-white px-8 py-3 rounded-md font-medium transition-colors">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* More Property Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            More Property Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ToletX Happy Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {[
              "lorem lorem",
              "Bay Emporium",
              "Truck Logistic",
              "Hotel Cox Today",
              "Uber",
              "lorem lorem",
            ].map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {partner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 bg-gradient-to-r from-[#11928f] to-[#0e7a77]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">
                Download ToletX App for FREE
              </h3>
              <p className="text-lg mb-6">
                Get the best deals and manage your bookings on the go
              </p>
              <div className="flex space-x-4">
                <img
                  src="/placeholder.svg?height=50&width=150"
                  alt="Download on App Store"
                  className="h-12"
                />
                <img
                  src="/placeholder.svg?height=50&width=150"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Mobile App"
                className="h-80"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchResultsPage;

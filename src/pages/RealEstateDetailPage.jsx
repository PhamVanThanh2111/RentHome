import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader";
import PropertyGallery from "../components/PropertyGallery";
import BookingForm from "../components/BookingForm";
import AmenitiesGrid from "../components/AmenitiesGrid";
import PropertyMap from "../components/PropertyMap";
import ReviewCard from "../components/ReviewCard";
import EnquiryForm from "../components/EnquiryForm";
import PropertyCard from "../components/PropertyCard";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

const RealEstateDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  // Mock property data
  const mockProperty = {
    id: Number.parseInt(id),
    title: "Orchard House (Luxury Apartment in Bashundhara, Dhaka)",
    location: "Bashundhara, Dhaka",
    price: 3200,
    rating: 4.8,
    reviews: 156,
    coordinates: { lat: 23.8223, lng: 90.4251 },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    description: `Experience luxury living in this stunning apartment located in the heart of Bashundhara, Dhaka. This beautifully furnished space offers modern amenities and elegant design, perfect for both short and long-term stays.

The apartment features spacious rooms with contemporary furnishing, high-speed internet, and all the comforts you need for a memorable stay. Located in one of Dhaka's most prestigious neighborhoods, you'll have easy access to shopping centers, restaurants, and business districts.`,
    amenities: [
      "Air conditioning",
      "Kitchen",
      "Wifi",
      "Parking",
      "Private bathroom",
      "Balcony",
      "Washing machine",
      "TV",
      "Heating",
      "Hair dryer",
      "Iron",
      "Smoke alarm",
      "First aid kit",
      "Fire extinguisher",
      "Essentials",
      "Shampoo",
    ],
    host: {
      name: "ToletX Management",
      avatar: "/placeholder.svg?height=50&width=50",
      joinDate: "Joined in March 2020",
      description:
        "We are a professional property management company dedicated to providing exceptional accommodation experiences.",
    },
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      date: "March 2024",
      rating: 5,
      comment:
        "Amazing property with excellent amenities. The location is perfect and the host was very responsive. Highly recommended!",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "John Smith",
      date: "February 2024",
      rating: 4,
      comment:
        "Great place to stay. Clean, comfortable, and well-equipped. The only minor issue was the parking space was a bit tight.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Fatima Khan",
      date: "January 2024",
      rating: 5,
      comment:
        "Perfect for business travelers. Fast wifi, quiet environment, and close to everything. Will definitely book again.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  const similarProperties = [
    {
      id: 2,
      title: "Modern Studio in Gulshan",
      location: "Gulshan, Dhaka",
      description: "Contemporary studio apartment",
      price: 2800,
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Luxury Flat in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      description: "Spacious luxury apartment",
      price: 3500,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Cozy Home in Uttara",
      location: "Uttara, Dhaka",
      description: "Family-friendly house",
      price: 2200,
      rating: 4.4,
      image: "/placeholder.svg?height=200&width=300",
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
    // In real app, fetch property data from API
    setProperty(mockProperty);
  }, [id]);

  const handleSearch = (searchData) => {
    console.log("Search from detail page:", searchData);
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchHeader
        initialSearchData={{
          location: "Dhaka/Gulshan",
          checkIn: "",
          checkOut: "",
          guests: "2 Adults",
          rooms: "1 Room",
        }}
        onSearch={handleSearch}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Gallery */}
            <PropertyGallery images={property.images} />

            {/* Property Info */}
            <div className="bg-white rounded-lg p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {property.title}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(property.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      } fill-current`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 font-medium">{property.rating}</span>
                  <span className="text-gray-500">
                    ({property.reviews} reviews)
                  </span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">{property.location}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-[#11928f] to-[#0e7a77] rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Special Offer</h3>
              <p className="mb-4">
                Book now and get 15% off your first week stay!
              </p>
              <button className="bg-white text-[#11928f] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Claim Offer
              </button>
            </div>

            {/* Amenities */}
            <AmenitiesGrid amenities={property.amenities} />

            {/* Map */}
            <PropertyMap location={property.location} coordinates={property.coordinates} />

            {/* Host Info */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Listing by {property.host.name}
              </h3>
              <div className="flex items-start space-x-4">
                <img
                  src={property.host.avatar || "/placeholder.svg"}
                  alt={property.host.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {property.host.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {property.host.joinDate}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {property.host.description}
                  </p>
                  <button className="mt-3 text-[#11928f] font-medium hover:underline">
                    Contact Host
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BookingForm property={property} />
          </div>
        </div>

        {/* Similar Properties */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Similar Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="mt-16">
          <EnquiryForm />
        </section>

        {/* Reviews */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews
            </h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 font-semibold">{property.rating}</span>
              </div>
              <button className="bg-[#11928f] text-white px-4 py-2 rounded-md hover:bg-[#0e7a77] transition-colors">
                Write Review
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
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

      <Footer />
    </div>
  );
};

export default RealEstateDetailPage;

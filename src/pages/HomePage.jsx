import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import ServiceCard from "../components/ServiceCard";
import CategoryCard from "../components/CategoryCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";

const HomePage = () => {
  // Mock data
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment in Gulshan",
      location: "Gulshan, Dhaka",
      description: "Beautiful 3-bedroom apartment with modern amenities",
      price: 25000,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Cozy Studio in Dhanmondi",
      location: "Dhanmondi, Dhaka",
      description: "Perfect for students and young professionals",
      price: 15000,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Family House in Uttara",
      location: "Uttara, Dhaka",
      description: "Spacious family home with garden",
      price: 35000,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Modern Flat in Banani",
      location: "Banani, Dhaka",
      description: "Contemporary living space in prime location",
      price: 28000,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Earn with ToletX",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zM14 6a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8zM6 10a2 2 0 100 4 2 2 0 000-4z"/></svg>',
    },
    {
      id: 2,
      title: "Hire",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>',
    },
    {
      id: 3,
      title: "Office/Home Shifting Services",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>',
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
    {
      id: 6,
      name: "Boarding Spot",
      count: 78,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      location: "Dhaka, Bangladesh",
      rating: 5,
      comment:
        "Great service! Found my perfect apartment within a week. The team was very helpful and professional.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  const partners = [
    "lorem lorem",
    "Bay Emporium",
    "Truck Logistic",
    "Hotel Cox Today",
    "Uber",
    "lorem lorem",
    "lorem lorem",
    "lorem lorem",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            FIND YOUR <span className="italic text-yellow-300">incredible</span>{" "}
            STAY
          </h1>
          <p className="text-xl text-white/90 mb-8">
            From cozy country homes to funky city apartments
          </p>

          <div className="mt-12">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Explore Bangladesh Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Explore Bangladesh
          </h2>

          {/* Location Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "Popular",
              "Dhaka",
              "Sylhet",
              "Chittagong",
              "Rangpur",
              "Rajshahi",
              "Khulna",
              "Barisal",
            ].map((location) => (
              <button
                key={location}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  location === "Dhaka"
                    ? "bg-[#11928f] text-white border-[#11928f]"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#11928f]"
                }`}
              >
                {location}
              </button>
            ))}
          </div>

          {/* Featured City */}
          <div className="relative rounded-lg overflow-hidden mb-12">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Dhaka"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Dhaka</h3>
                <p className="text-lg mb-4">
                  Discover the vibrant capital city with its rich history and
                  modern amenities
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    📍 Central Location
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    🏢 Business Hub
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Offer Best Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to make your
              property journey seamless and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">
                Sunmangal Sultan Resort & Golf
              </h3>
              <p className="mb-4">
                Experience luxury at its finest with our premium resort
                facilities
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                Book Now
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Resort"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Property Category in the World
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What People Say About Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ToletX Happy Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner, index) => (
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

      <Footer />
    </div>
  );
};

export default HomePage;

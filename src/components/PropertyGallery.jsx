import { useState } from "react";
import PropTypes from "prop-types";

const PropertyGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="grid grid-cols-4 gap-2 h-96">
      {/* Main Image */}
      <div className="col-span-2 row-span-2">
        <img
          src={images[currentImage] || "/placeholder.svg?height=400&width=600"}
          alt="Property main view"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Thumbnail Images */}
      {images.slice(1, 5).map((image, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => setCurrentImage(index + 1)}
        >
          <img
            src={image || "/placeholder.svg?height=200&width=300"}
            alt={`Property view ${index + 2}`}
            className={`w-full h-full object-cover rounded-lg ${
              currentImage === index + 1 ? "ring-2 ring-[#11928f]" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyGallery;

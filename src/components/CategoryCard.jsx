import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={category.image || "/placeholder.svg"}
        alt={category.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
        <div className="p-4 text-white">
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <p className="text-sm opacity-90">{category.count} properties</p>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;

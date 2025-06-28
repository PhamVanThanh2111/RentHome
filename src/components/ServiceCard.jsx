import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-[#11928f] rounded-full flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: service.icon }} />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;

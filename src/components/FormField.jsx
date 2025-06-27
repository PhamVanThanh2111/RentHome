import PropTypes from "prop-types";

const FormField = ({
  id,
  label,
  type,
  placeholder,
  required = false,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-[#0c1421]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f] focus:border-transparent bg-white text-[#0c1421] placeholder:text-[#909090] ${
          error ? "border-red-500" : "border-[#cfdfe2]"
        }`}
        required={required}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default FormField;

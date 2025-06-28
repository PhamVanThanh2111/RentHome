import PropTypes from "prop-types";

const TagSelector = ({
  label,
  options,
  selectedTags,
  onTagsChange,
  maxSelection,
  isEditing = true,
}) => {
  const handleTagToggle = (tag) => {
    if (!isEditing) return;

    const isSelected = selectedTags.includes(tag);
    let newTags;

    if (isSelected) {
      newTags = selectedTags.filter((t) => t !== tag);
    } else {
      if (maxSelection && selectedTags.length >= maxSelection) {
        return;
      }
      newTags = [...selectedTags, tag];
    }

    onTagsChange(newTags);
  };

  if (!isEditing) {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm font-medium bg-[#11928f] text-white"
            >
              {tag}
            </span>
          ))}
          {selectedTags.length === 0 && (
            <span className="text-gray-500 text-sm">Not specified</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleTagToggle(option)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedTags.includes(option)
                ? "bg-[#11928f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

TagSelector.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagsChange: PropTypes.func.isRequired,
  maxSelection: PropTypes.number,
  isEditing: PropTypes.bool,
};

export default TagSelector;

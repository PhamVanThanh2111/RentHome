import { useState } from "react";
import PropTypes from "prop-types";

const FileUpload = ({
  label,
  accept = "image/*",
  onFileSelect,
  currentFile,
  className = "",
}) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
          dragOver
            ? "border-[#11928f] bg-[#11928f]/5"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="space-y-2">
          <div className="mx-auto w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div>
            <button
              type="button"
              className="text-[#11928f] hover:text-[#0e7a77] font-medium text-sm"
              onClick={() =>
                document
                  .getElementById(`file-input-${label.replace(/\s+/g, "-")}`)
                  .click()
              }
            >
              Choose File
            </button>
            <span className="text-gray-500 ml-2 text-sm">or drag and drop</span>
          </div>
          {currentFile ? (
            <p className="text-xs text-gray-600">
              Selected: {currentFile.name || "File selected"}
            </p>
          ) : (
            <p className="text-xs text-gray-500">No File Chosen</p>
          )}
        </div>
        <input
          id={`file-input-${label.replace(/\s+/g, "-")}`}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  accept: PropTypes.string,
  onFileSelect: PropTypes.func.isRequired,
  currentFile: PropTypes.object,
  className: PropTypes.string,
};

export default FileUpload;

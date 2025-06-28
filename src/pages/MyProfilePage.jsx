import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileSidebar from "../components/ProfileSidebar";
import FormField from "../components/FormField";
import FileUpload from "../components/FileUpload";
import TagSelector from "../components/TagSelector";
import InfoDisplay from "../components/InfoDisplay";

const MyProfilePage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("profile-info");
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    // Personal Details
    fullName: "Masum Rana (Sabuj)",
    givenName: "",
    surname: "",
    dateOfBirth: "15 Feb 1982",
    placeOfBirth: "Dhaka, Bangladesh",
    gender: "Male",
    nationality: "Bangladeshi",
    nationalId: "1045581448530",

    // Contact Details
    email: "masum_rana@gmail.com",
    phoneNumber: "XXX (XXX) XXXX",
    permanentAddress: "14/A Distillery Road, Gandaria, Dhaka",
    presentAddress: "14/A Distillery Road, Gandaria, Dhaka, Bangladesh",

    // Educational Background
    school: "Rajuk Uttara Model College, Dhaka",
    college: "Bluchini Niamito United High School And College, Dhaka",
    university: "University Of Dhaka (B.Sc)",

    // Professional Details
    occupation: "Software Engineer (Job)",
    companyName: "Tiger IT Solutions",
    designation: "Sr. Software Engineer (Python)",

    // Emergency Contact
    emergencyName: "Golam Nobi",
    emergencyRelation: "Brother",
    emergencyEmail: "golam.nobi00@gmail.com",
    emergencyPhone: "XXX (XXX) XXXX",
    emergencyAddress: "14/A Distillery Road, Gandaria, Dhaka",

    // Personality
    hobbies: ["Badminton", "Cricket", "Cycling", "Travel"],
    languagePreference: ["Bangla", "English", "Spanish"],
    favoriteSports: "Hockey, Badminton",
    petAnimal: "Cat, Birds",
    travelDestination: "Hill, Sea",
    favoriteVehicle: "Bike, Car",
  });

  const [files, setFiles] = useState({
    profilePicture: null,
    nationalIdPicture: null,
    addressProof: null,
  });

  const [uploadedDocuments] = useState([
    {
      id: 1,
      type: "National ID",
      image: "/placeholder.svg?height=100&width=150",
      name: "national_id.jpg",
    },
    {
      id: 2,
      type: "Utility Bill",
      image: "/placeholder.svg?height=100&width=150",
      name: "utility_bill.pdf",
    },
  ]);

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileSelect = (fileType, file) => {
    setFiles((prev) => ({
      ...prev,
      [fileType]: file,
    }));
  };

  const handleTagsChange = (field, tags) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: tags,
    }));
  };

  const handleSave = () => {
    console.log("Saving profile data:", profileData);
    console.log("Files:", files);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset any unsaved changes if needed
  };

  const hobbiesOptions = [
    "Restaurant",
    "Cricket",
    "Cycling",
    "Travel",
    "Reading",
    "Music",
    "Photography",
    "Cooking",
    "Badminton",
  ];
  const languageOptions = [
    "Bangla",
    "English",
    "Spanish",
    "Hindi",
    "Arabic",
    "French",
  ];

  const renderViewMode = () => (
    <div className="bg-white rounded-lg shadow-sm border p-8">
      {/* Header with Edit Button */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Account Information
        </h2>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-[#11928f] hover:bg-[#0e7a77] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          ✏️ Edit
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Details */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Personal Details
          </h3>
          <div className="space-y-4">
            <InfoDisplay
              icon="👤"
              label="Full Name"
              value={profileData.fullName}
            />
            <InfoDisplay
              icon="📅"
              label="Date Of Birth"
              value={profileData.dateOfBirth}
            />
            <InfoDisplay
              icon="📍"
              label="Place Of Birth"
              value={profileData.placeOfBirth}
            />
            <InfoDisplay icon="⚧" label="Gender" value={profileData.gender} />
            <InfoDisplay
              icon="🌍"
              label="Nationality"
              value={profileData.nationality}
            />
            <InfoDisplay
              icon="🆔"
              label="National ID"
              value={profileData.nationalId}
            />
          </div>
        </section>

        {/* Educational Background */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Educational Background
          </h3>
          <div className="space-y-4">
            <InfoDisplay icon="🏫" label="School" value={profileData.school} />
            <InfoDisplay
              icon="🎓"
              label="College"
              value={profileData.college}
            />
            <InfoDisplay
              icon="🏛️"
              label="University"
              value={profileData.university}
            />
          </div>
        </section>

        {/* Contact Details */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Contact Details
          </h3>
          <div className="space-y-4">
            <InfoDisplay icon="✉️" label="Email" value={profileData.email} />
            <InfoDisplay
              icon="📞"
              label="Phone"
              value={profileData.phoneNumber}
            />
            <InfoDisplay
              icon="🏠"
              label="Permanent Address"
              value={profileData.permanentAddress}
            />
            <InfoDisplay
              icon="📍"
              label="Present Address"
              value={profileData.presentAddress}
            />
          </div>
        </section>

        {/* Professional Details */}
        <section>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Professional Details
          </h3>
          <div className="space-y-4">
            <InfoDisplay
              icon="💼"
              label="Occupation"
              value={profileData.occupation}
            />
            <InfoDisplay
              icon="🏢"
              label="Company Name"
              value={profileData.companyName}
            />
            <InfoDisplay
              icon="👨‍💻"
              label="Designation"
              value={profileData.designation}
            />
          </div>
        </section>
      </div>

      {/* Personality Section */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Personality
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TagSelector
            label="Hobbies"
            options={hobbiesOptions}
            selectedTags={profileData.hobbies}
            onTagsChange={() => {}}
            isEditing={false}
          />
          <TagSelector
            label="Language Preference"
            options={languageOptions}
            selectedTags={profileData.languagePreference}
            onTagsChange={() => {}}
            isEditing={false}
          />
          <InfoDisplay
            icon="⚽"
            label="Favorite Sports"
            value={profileData.favoriteSports}
          />
          <InfoDisplay
            icon="🐾"
            label="Pet Animal"
            value={profileData.petAnimal}
          />
          <InfoDisplay
            icon="✈️"
            label="Travel Destination"
            value={profileData.travelDestination}
          />
          <InfoDisplay
            icon="🚗"
            label="Favorite Vehicle"
            value={profileData.favoriteVehicle}
          />
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Emergency Contact Person
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InfoDisplay
            icon="👤"
            label="Full Name"
            value={profileData.emergencyName}
          />
          <InfoDisplay
            icon="👥"
            label="Relation"
            value={profileData.emergencyRelation}
          />
          <InfoDisplay
            icon="✉️"
            label="Email"
            value={profileData.emergencyEmail}
          />
          <InfoDisplay
            icon="📞"
            label="Phone"
            value={profileData.emergencyPhone}
          />
          <div className="lg:col-span-2">
            <InfoDisplay
              icon="📍"
              label="Present Address"
              value={profileData.emergencyAddress}
            />
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Documents You Upload
        </h3>
        <div className="flex items-center space-x-4">
          {uploadedDocuments.map((doc) => (
            <div key={doc.id} className="relative">
              <img
                src={doc.image || "/placeholder.svg"}
                alt={doc.type}
                className="w-24 h-16 object-cover rounded-lg border"
              />
              <p className="text-xs text-gray-600 mt-1 text-center">
                {doc.type}
              </p>
            </div>
          ))}
          <button className="text-[#11928f] hover:text-[#0e7a77] font-medium text-sm">
            More
          </button>
        </div>
      </section>
    </div>
  );

  const renderEditMode = () => (
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <form className="space-y-8">
        {/* Personal Details */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="fullName"
              label="Full Name (As Per National ID/Passport)"
              type="text"
              placeholder="Type here"
              value={profileData.fullName}
              onChange={handleInputChange}
            />
            <FormField
              id="givenName"
              label="Given Name/First Name"
              type="text"
              placeholder="Type here"
              value={profileData.givenName}
              onChange={handleInputChange}
            />
            <FormField
              id="surname"
              label="Surname/Last Name"
              type="text"
              placeholder="Type here"
              value={profileData.surname}
              onChange={handleInputChange}
            />
            <FormField
              id="dateOfBirth"
              label="Date Of Birth"
              type="date"
              placeholder="Select Date Of Birth"
              value={profileData.dateOfBirth}
              onChange={handleInputChange}
            />
            <FormField
              id="placeOfBirth"
              label="Place Of Birth"
              type="text"
              placeholder="Type here"
              value={profileData.placeOfBirth}
              onChange={handleInputChange}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
                value={profileData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nationality
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#11928f]"
                value={profileData.nationality}
                onChange={(e) =>
                  handleInputChange("nationality", e.target.value)
                }
              >
                <option value="Bangladeshi">Bangladeshi</option>
                <option value="Indian">Indian</option>
                <option value="Pakistani">Pakistani</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <FormField
              id="nationalId"
              label="National ID/Passport Number"
              type="text"
              placeholder="Type here"
              value={profileData.nationalId}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <FileUpload
              label="Upload Profile Picture"
              accept="image/*"
              onFileSelect={(file) => handleFileSelect("profilePicture", file)}
              currentFile={files.profilePicture}
            />
            <FileUpload
              label="National ID/Passport Picture"
              accept="image/*"
              onFileSelect={(file) =>
                handleFileSelect("nationalIdPicture", file)
              }
              currentFile={files.nationalIdPicture}
            />
          </div>
        </section>

        {/* Contact Details */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="email"
              label="Email (Verified)"
              type="email"
              placeholder="Type here"
              value={profileData.email}
              onChange={handleInputChange}
            />
            <FormField
              id="phoneNumber"
              label="Phone Number (Verified)"
              type="tel"
              placeholder="+880 XXX XXX XXXX"
              value={profileData.phoneNumber}
              onChange={handleInputChange}
            />
            <FormField
              id="permanentAddress"
              label="Permanent Address"
              type="text"
              placeholder="Type here"
              value={profileData.permanentAddress}
              onChange={handleInputChange}
            />
            <FormField
              id="presentAddress"
              label="Present Address"
              type="text"
              placeholder="Type here"
              value={profileData.presentAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-6">
            <FileUpload
              label="Upload Proof of Address (Utility Bill, etc.)"
              accept=".pdf,.jpg,.jpeg,.png"
              onFileSelect={(file) => handleFileSelect("addressProof", file)}
              currentFile={files.addressProof}
            />
          </div>
        </section>

        {/* Educational Background */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Educational Background
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="school"
              label="School"
              type="text"
              placeholder="Type here"
              value={profileData.school}
              onChange={handleInputChange}
            />
            <FormField
              id="college"
              label="College"
              type="text"
              placeholder="Type here"
              value={profileData.college}
              onChange={handleInputChange}
            />
            <FormField
              id="university"
              label="University"
              type="text"
              placeholder="Type here"
              value={profileData.university}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Professional Details */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Professional Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="occupation"
              label="Occupation"
              type="text"
              placeholder="What is your Occupation"
              value={profileData.occupation}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Emergency Contact Person */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Emergency Contact Person
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="emergencyName"
              label="Full Name"
              type="text"
              placeholder="Type here"
              value={profileData.emergencyName}
              onChange={handleInputChange}
            />
            <FormField
              id="emergencyRelation"
              label="Relation With You"
              type="text"
              placeholder="Type here"
              value={profileData.emergencyRelation}
              onChange={handleInputChange}
            />
            <FormField
              id="emergencyEmail"
              label="Email"
              type="email"
              placeholder="Type here"
              value={profileData.emergencyEmail}
              onChange={handleInputChange}
            />
            <FormField
              id="emergencyPhone"
              label="Phone Number"
              type="tel"
              placeholder="Type here"
              value={profileData.emergencyPhone}
              onChange={handleInputChange}
            />
            <div className="md:col-span-2">
              <FormField
                id="emergencyAddress"
                label="Present Address"
                type="text"
                placeholder="Type here"
                value={profileData.emergencyAddress}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>

        {/* Personality */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Personality
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TagSelector
              label="Hobbies"
              options={hobbiesOptions}
              selectedTags={profileData.hobbies}
              onTagsChange={(tags) => handleTagsChange("hobbies", tags)}
            />
            <TagSelector
              label="Language Preference"
              options={languageOptions}
              selectedTags={profileData.languagePreference}
              onTagsChange={(tags) =>
                handleTagsChange("languagePreference", tags)
              }
            />
            <FormField
              id="favoriteSports"
              label="Favorite Sports"
              type="text"
              placeholder="Type here"
              value={profileData.favoriteSports}
              onChange={handleInputChange}
            />
            <FormField
              id="petAnimal"
              label="Pet Animal"
              type="text"
              placeholder="Type here"
              value={profileData.petAnimal}
              onChange={handleInputChange}
            />
            <FormField
              id="travelDestination"
              label="Travel Destination"
              type="text"
              placeholder="Type here"
              value={profileData.travelDestination}
              onChange={handleInputChange}
            />
            <FormField
              id="favoriteVehicle"
              label="Favorite Vehicle"
              type="text"
              placeholder="Type here"
              value={profileData.favoriteVehicle}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6 border-t">
          <button
            type="button"
            onClick={handleCancel}
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-8 py-3 bg-[#11928f] hover:bg-[#0e7a77] text-white rounded-md transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );

  const handleAvatarClick = () => {
    // Có thể mở modal để thay đổi ảnh hoặc navigate đến edit mode
    setIsEditing(true);
  };

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
                <div
                  className="relative cursor-pointer"
                  onClick={handleAvatarClick}
                >
                  <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity">
                    {files.profilePicture ? (
                      <img
                        src={
                          URL.createObjectURL(files.profilePicture) ||
                          "/placeholder.svg"
                        }
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#11928f] rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2
                    className="text-xl font-bold text-gray-900 cursor-pointer hover:text-[#11928f] transition-colors"
                    onClick={handleAvatarClick}
                  >
                    Masum Rana
                  </h2>
                  <div className="flex items-center text-gray-600 mt-1 space-x-4">
                    <span className="flex items-center">
                      <span className="mr-1">📍</span>
                      Dhaka
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">📞</span>
                      PH: +8801XXXXXX07
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            {isEditing ? renderEditMode() : renderViewMode()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyProfilePage;

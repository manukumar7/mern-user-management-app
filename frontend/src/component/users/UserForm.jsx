import { useState, useContext } from "react";
import { Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ImageDropzone from "@/components/ui/ImageDropzone";
import { validateEmail, validateRequired, sanitizeInput } from "@/lib/utils";
import { toast } from "react-hot-toast";

// ✅ import context
import { UserContext } from "@/context/UserContext";

const positions = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Product Manager",
  "DevOps Engineer",
  "Data Scientist",
  "QA Engineer",
];

const UserForm = ({ user, onCancel }) => {
  const { addUser, editUser, loading } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    position: user?.position || "",
  });

  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);

  // ✅ Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!validateRequired(formData.email)) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validateRequired(formData.position)) {
      newErrors.position = "Position is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleImageSelect = (file) => {
    setImageFile(file);
    setErrors((prev) => ({ ...prev, profile_image: undefined }));
  };

  // ✅ Now directly call addUser or editUser from context
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("position", formData.position);
    if (imageFile) submitData.append("profile_image", imageFile);

    try {
      if (user?._id) {
        await editUser(user._id, submitData);
        toast.success(" User updated successfully!");
      } else {
        await addUser(submitData);
        toast.success("🎉 User added successfully!");
      }
      if (onCancel) onCancel();
    } catch (err) {
      console.error("❌ Submit failed:", err);
      toast.error("Failed to save user. Please try again.");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-app-lg bg-white transition-all duration-300 font-inter animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>{user ? "Edit User" : "Add New User"}</span>
        </CardTitle>
        <CardDescription className="text-gray-500 font-inter">
          {user
            ? "Update user information and profile image"
            : "Fill in the details to create a new user"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image Upload */}
          <div className="space-y-4">
            <Label className="text-gray-900 font-inter">Profile Image</Label>
            <ImageDropzone
              onImageSelect={handleImageSelect}
              currentImage={user?.profile_image}
              userName={formData.name}
              error={errors.profile_image}
              className="hover:border-blue-600/50 hover:bg-blue-600/20 transition-all duration-300"
            />
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 gap-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-900 font-inter">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter full name"
                className={`border border-gray-200 rounded px-2 py-1 focus:ring-2 focus:ring-blue-600 font-inter ${
                  errors.name ? "border-red-600 focus:ring-red-600" : ""
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-600 font-inter">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900 font-inter">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter email address"
                className={`border border-gray-200 rounded px-2 py-1 focus:ring-2 focus:ring-blue-600 font-inter ${
                  errors.email ? "border-red-600 focus:ring-red-600" : ""
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 font-inter">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Position */}
          <div className="space-y-2 w-full">
            <Label htmlFor="position" className="text-gray-900 font-inter">
              Position *
            </Label>
            <Select
              value={formData.position}
              onValueChange={(value) => handleInputChange("position", value)}
            >
              <SelectTrigger
                className={`w-full border border-gray-200 rounded focus:ring-2 focus:ring-blue-600 font-inter text-sm h-9 px-3 bg-white ${
                  errors.position ? "border-red-600 focus:ring-red-600" : ""
                }`}
              >
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent className="w-full bg-white">
                {positions.map((position) => (
                  <SelectItem
                    key={position}
                    value={position}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.position && (
              <p className="text-sm text-red-600 font-inter">
                {errors.position}
              </p>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:shadow-md transition-all flex items-center justify-center font-inter"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin mr-2" />
                  {user ? "Updating..." : "Creating..."}
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  {user ? "Update User" : "Create User"}
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:scale-105 font-inter"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;

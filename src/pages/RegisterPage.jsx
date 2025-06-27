import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import FormField from "../components/FormField";
import PrimaryButton from "../components/PrimaryButton";
import { useForm } from "../hooks/useForm";
import { authService } from "../services/authService";
import {
  validateEmail,
  validatePassword,
  validatePhone,
  validateRequired,
} from "../utils/validation";
import { ROUTES } from "../constants/routes";

const RegisterPage = () => {
  const navigate = useNavigate();

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    {
      firstName: {
        required: true,
        validator: validateRequired,
        message: "First name is required",
      },
      lastName: {
        required: true,
        validator: validateRequired,
        message: "Last name is required",
      },
      mobile: {
        required: true,
        validator: validatePhone,
        message: "Please enter a valid phone number (+88 01XXXXXXXXX)",
      },
      email: {
        required: true,
        validator: validateEmail,
        message: "Please enter a valid email address",
      },
      password: {
        required: true,
        validator: validatePassword,
        message: "Password must be at least 8 characters",
      },
      confirmPassword: {
        required: true,
        validator: (value) => value === values.password,
        message: "Passwords do not match",
      },
    }
  );

  const onSubmit = async (formData) => {
    try {
      const response = await authService.register(formData);
      console.log("Registration successful:", response);
      // Store token and redirect
      localStorage.setItem("token", response.token);
      navigate("/dashboard"); // Redirect to dashboard or home
    } catch (error) {
      console.error("Registration failed:", error.message);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <AuthLayout title="Register">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }}
        className="space-y-4"
      >
        <FormField
          id="firstName"
          label="First Name"
          type="text"
          placeholder="Enter Your First Name"
          required
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <FormField
          id="lastName"
          label="Last Name"
          type="text"
          placeholder="Enter Your Last Name"
          required
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />

        <FormField
          id="mobile"
          label="Mobile"
          type="tel"
          placeholder="+88 01XXXXXXXXX"
          required
          value={values.mobile}
          onChange={handleChange}
          error={errors.mobile}
        />

        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Your Mail"
          required
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="at least 8 characters"
          required
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <FormField
          id="confirmPassword"
          label="Re-Enter Password"
          type="password"
          placeholder="at least 8 characters"
          required
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <div className="pt-2">
          <PrimaryButton type="submit" loading={isSubmitting}>
            Create Account
          </PrimaryButton>
        </div>
      </form>

      {/* Login Link */}
      <div className="text-center">
        <span className="text-sm text-[#909090]">
          {"Already have an account? "}
          <Link to={ROUTES.LOGIN} className="text-[#11928f] hover:underline">
            Login
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;

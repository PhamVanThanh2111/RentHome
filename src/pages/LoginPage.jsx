import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import FormField from "../components/FormField";
import PrimaryButton from "../components/PrimaryButton";
import SocialLoginButtons from "../components/SocialLoginButtons";
import { useForm } from "../hooks/useForm";
import { authService } from "../services/authService";
import { validateEmail, validatePassword } from "../utils/validation";
import { ROUTES } from "../constants/routes";

const LoginPage = () => {
  const navigate = useNavigate();

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    {
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
    }
  );

  const onSubmit = async (formData) => {
    try {
      const response = await authService.login(formData);
      console.log("Login successful:", response);
      // Store token and redirect
      localStorage.setItem("token", response.token);
      navigate("/dashboard"); // Redirect to dashboard or home
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }}
        className="space-y-4"
      >
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Example@email.com"
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

        {/* Forgot Password Link */}
        <div className="flex justify-end">
          <Link
            to={ROUTES.FORGOT_PASSWORD}
            className="text-sm text-[#11928f] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <PrimaryButton type="submit" loading={isSubmitting}>
          Login
        </PrimaryButton>
      </form>

      <SocialLoginButtons />

      {/* Registration Link */}
      <div className="text-center">
        <span className="text-sm text-[#909090]">
          {"Don't you have an account? "}
          <Link to={ROUTES.REGISTER} className="text-[#11928f] hover:underline">
            Registration
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;

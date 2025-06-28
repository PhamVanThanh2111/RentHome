import PropTypes from "prop-types";
import Logo from "../components/Logo";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <Logo />

        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-center text-[#0c1421]">
            {title}
          </h1>
          {children}
        </div>

        {/* Copyright */}
        <div className="text-center mt-12">
          <p className="text-xs text-[#909090]">
            Copyright 2024 • ToletX, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default AuthLayout;

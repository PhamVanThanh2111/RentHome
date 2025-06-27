// Mock API service - thay thế bằng API thực tế
const API_BASE_URL = "https://api.toletx.com";

export const authService = {
  login: async (credentials) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.email === "test@example.com" &&
          credentials.password === "password123"
        ) {
          resolve({
            user: { id: 1, email: credentials.email, name: "Test User" },
            token: "mock-jwt-token",
          });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  },

  register: async (userData) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email && userData.password) {
          resolve({
            user: {
              id: 2,
              email: userData.email,
              name: `${userData.firstName} ${userData.lastName}`,
            },
            token: "mock-jwt-token",
          });
        } else {
          reject(new Error("Registration failed"));
        }
      }, 1000);
    });
  },

  forgotPassword: async (email) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Password reset email sent" });
      }, 1000);
    });
  },
};

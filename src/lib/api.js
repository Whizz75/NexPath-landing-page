// src/utils/api.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // include cookies for cross-origin requests
});

// Optional: Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  }
);

// --- AUTH ENDPOINTS ---
export const AuthAPI = {
  signIn: (data) => api.post("/auth/signin", data),
  register: (data) => api.post("/auth/register", data),
  verifyOTP: (data) => api.post("/auth/verify-otp", data),
  sessionLogin: (data) => api.post("/auth/sessionLogin", data),
};

// --- COMPANY / INSTITUTION ACCESS ---
export const AccessAPI = {
  requestAccess: (data) => api.post("/access/request", data),
};

export default api;

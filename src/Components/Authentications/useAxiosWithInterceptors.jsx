
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const useAxiosWithInterceptors = () => {
  const navigate = useNavigate();
  const { signout } = useContext(AuthContext);

  // Create Axios instance
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
  });

  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized access - logging out...");
        if (signout) {
          await signout();
          navigate("/"); // Redirect to the home page
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosWithInterceptors;

import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(new Error(err));
  },
);

export default http;

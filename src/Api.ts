import axios from "axios";

export const baseURL = process.env.REACT_APP_SERVER_URL;

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

// apiClient.interceptors.request.use((config) => {
//   config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

const { get, post } = apiClient;

export { get, post };

import axios from "axios";

export const baseURL = process.env.REACT_APP_SERVER_URL;

export const apiClient = axios.create({
  baseURL,
});

const { get, post } = apiClient;

export { get, post };

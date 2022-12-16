import axios from "axios";

const LOCAL_BASE_URL = import.meta.env.VITE_LOCAL_BASE_URL;
export const axiosInstance = axios.create({
  baseURL: LOCAL_BASE_URL,
});

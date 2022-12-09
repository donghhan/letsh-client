import axios from "axios";

const { VITE_LOCAL_BASE_URL } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: VITE_LOCAL_BASE_URL,
});

export async function getRooms() {
  const response = await axiosInstance.get(`accomodations/`);
  return response.data;
}

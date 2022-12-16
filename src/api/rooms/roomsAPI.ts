import { axiosInstance } from "../index";

export async function getRooms() {
  const response = await axiosInstance.get(`accomodations/`);
  return response.data;
}

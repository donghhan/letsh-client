import { QueryFunctionContext } from "@tanstack/react-query";
import { axiosInstance } from "../index";

export async function getRooms() {
  const response = await axiosInstance.get(`accomodations/`);
  return response.data;
}

export async function getRoomDetail({ queryKey }: QueryFunctionContext) {
  const [_, id] = queryKey;
  const response = await axiosInstance.get(`accomodations/${id}/`);
  return response.data;
}

import { HTMLChakraProps, ThemingProps } from "@chakra-ui/react";

export interface StyledButtonProps
  extends HTMLChakraProps<"button" | "span">,
    ThemingProps {}

export interface IRoom {
  name: string;
  id: number;
  description?: string;
  price_per_night: number;
  is_free_breakfast: boolean;
  is_free_internet: boolean;
  is_free_parking: boolean;
  is_free_booking_cancelation: boolean;
  number_of_beds: number;
  number_of_bedrooms: number;
  number_of_bathrooms: number;
  maximum_guests: number;
  rating: number;
  photos?: IPhoto[];
}

export interface IRoomDetail extends IRoom {
  owner: string;
  amenities?: string[];
  category?: string;
  reviews?: string[];
}

export interface IPhoto {
  pk: string;
  file: string;
  caption: string;
  room?: string;
}

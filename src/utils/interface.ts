export interface IRoom {
  name: string;
  price_per_night: number;
  is_free_breakfast: boolean;
  is_free_internet: boolean;
  is_free_parking: boolean;
  is_free_booking_cancelation: boolean;
  number_of_beds: number;
  rating: number;
  photos: string[];
}

import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const atomUnit = atom(1);
export const atomBooking = atomWithStorage("booking-detail", {
  total: 0,
  night: 1,
  location: "",
  name: "",
  image: "",
});

export const detailCardItem = atomWithStorage<TResponseGetData[0]>("detail", {
  name: "",
  image: "",
  location: "",
  price: 0,
  description: "",
  isPopular: false,
});

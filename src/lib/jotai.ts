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

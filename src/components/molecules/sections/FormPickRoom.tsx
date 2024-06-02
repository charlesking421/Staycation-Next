"use client";

import React from "react";
import { Button } from "@/components/atoms/Button";
import { Minus, Plus } from "lucide-react";
import { DatePickerWithRange } from "@/components/atoms/Datepicker";
import { useAtomValue, useAtom, useSetAtom } from "jotai";
import Link from "next/link";
import { detailCardItem } from "@/components/molecules/contains/ContainMostPicked";
import { atomBooking, atomUnit } from "@/lib/jotai";

export default function FormPickRoom() {
  const [perNight, setPerNight] = useAtom(atomUnit);
  const { price, location, name, image } = useAtomValue(detailCardItem);
  const setAtomBooking = useSetAtom(atomBooking);

  const totalPayment = perNight * price;

  const onSetBookingPlace = () => {
    setAtomBooking({
      total: totalPayment,
      night: perNight,
      location,
      name,
      image,
    });
  };

  return (
    <div className="lg:cols-span-1 lg:p-8 lg:mt-0 mt-6">
      <div className="border rounded-xl border-gray-200 lg:px-24 lg:py-12 p-4">
        <p className="lg:text-xl text-base text-cyan-800 font-semibold lg:font-normal">
          Start Booking
        </p>
        <p className="lg:text-4xl text-2xl text-gray-300 font-light mt-3">
          <span className="text-cyan-500 font-semibold">${price}</span> / night
        </p>
        <div className="mt-10">
          <p className="text-cyan-800 mb-4 lg:text-base text-sm">
            How long you will stay?
          </p>
          <div className="flex bg-gray-100 rounded-sm justify-between items-center">
            <Button
              onClick={() => {
                if (perNight > 1) {
                  setPerNight(perNight - 1);
                }
              }}
              className="bg-red-400 py-6"
            >
              <Minus />
            </Button>
            <span
              className={`lg:text-2xl text-base ${
                perNight <= 1 ? " text-gray-300" : "text-cyan-800"
              }`}
            >
              {String(perNight)}
            </span>
            <Button
              onClick={() => {
                if (perNight >= 1) {
                  setPerNight(perNight + 1);
                }
              }}
              className="bg-cyan-600 py-6"
            >
              <Plus />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-cyan-800 mb-4 lg:text-base text-sm">Pick a Date</p>
          <DatePickerWithRange howLong={perNight} />

          <p className="lg:text-base text-sm font-light text-gray-300 mt-3">
            You will pay <span className="text-cyan-800">${totalPayment}</span>{" "}
            USD per
            <span className="text-cyan-800"> {perNight} nights</span>
          </p>
          <Link href={`/booking/${name.replaceAll(" ", "-").toLowerCase()}`}>
            <Button
              onClick={onSetBookingPlace}
              disabled={perNight <= 0}
              size="lg"
              className="w-full bg-cyan-600 mt-12 lg:text-base"
            >
              Continue to Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

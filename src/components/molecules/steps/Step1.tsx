import Image from "next/image";
import React from "react";
import { useAtomValue } from "jotai";

import { LabelHeader } from "@/components/molecules/headers/HeaderBookingStep";
import { InputWithLabel } from "@/components/atoms/InputWithLabel";
import { useFormContext } from "react-hook-form";
import { Schema } from "@/components/pages/details-booking/BookingDestination";
import { atomBooking } from "@/lib/jotai";

export default function Step1() {
  const { image, name, location, total, night } = useAtomValue(atomBooking);
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <>
      <LabelHeader
        label=" Booking Information"
        description="Please fill up the blank fields below"
      />
      <div className="mt-24 grid grid-cols-2 gap-8">
        <div className="col-span-1 border-r-2 border-0 border-gray-200 pr-12">
          <div className="relative aspect-video">
            <Image
              src={String(image) || "/detail-booking.png"}
              fill
              priority
              alt="beauty-backyard-1"
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <div>
              <p className="capitalize text-cyan-800 text-2xl font-semibold">
                {name}
              </p>
              <p className="capitalize text-gray-300 text-lg">{location}</p>
            </div>
            <p className="text-2xl font-light text-gray-300">
              <span className="text-cyan-800 font-semibold">${total} USD</span>{" "}
              / {night} night
            </p>
          </div>
        </div>
        <div className="col-span-1 space-y-5 pr-[12rem]">
          <InputWithLabel
            register={register}
            name="first_name"
            required
            message={errors?.first_name?.message as string}
            label="First Name"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            register={register}
            name="last_name"
            required
            message={errors?.last_name?.message as string}
            label="Last Name"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            register={register}
            name="email"
            required
            message={errors?.email?.message as string}
            type="email"
            label="Email Address"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            register={register}
            message={errors?.phone_number?.message as string}
            name="phone_number"
            required
            label="Phone Number"
            placeholder="Ex. +6212345678890"
          />
        </div>
      </div>
    </>
  );
}

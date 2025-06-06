import Image from "next/image";
import React from "react";
import { useAtomValue } from "jotai";

import { LabelHeader } from "@/app/booking/[payments]/(components)/HeaderBookingStep";
import { InputWithLabel } from "@/components/atoms/InputWithLabel";
import { useFormContext } from "react-hook-form";
import { atomBooking } from "@/lib/jotai";
import { SchemaInformation } from "@/lib/schema";

export default function BookingInformation() {
  const { image, name, location, total, night } = useAtomValue(atomBooking);
  const {
    register,
    formState: { errors },
  } = useFormContext<SchemaInformation>();

  return (
    <>
      <LabelHeader
        label=" Booking Information"
        description="Please fill up the blank fields below"
      />
      <div className="lg:mt-24 mt-14 grid grid-cols-2 lg:gap-8">
        <div className="lg:col-span-1 col-span-2 lg:border-r-2 border-0 lg:border-gray-200 lg:pr-12">
          <div className="relative aspect-video">
            <Image
              src={String(image) || "/detail-booking.png"}
              fill
              priority
              alt="beauty-backyard-1"
            />
          </div>

          <div className="flex justify-between items-center lg:mt-8 mt-4">
            <div>
              <p className="capitalize text-cyan-800 lg:text-2xl text-lg font-semibold">
                {name}
              </p>
              <p className="capitalize text-gray-300 lg:text-lg text-sm">
                {location}
              </p>
            </div>
            <p className="lg:text-2xl text-base font-light text-gray-300">
              <span className="text-cyan-800 font-semibold">${total} USD</span>{" "}
              / {night} night
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-2 lg:space-y-5 space-y-3 lg:pr-[12rem] lg:mt-0 mt-8">
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

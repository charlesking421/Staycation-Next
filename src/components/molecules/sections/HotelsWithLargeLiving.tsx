import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainHotelLiving } from "@/components/molecules/contains/ContainHotelLiving";

async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_STAGING}/json/large-living-room.json`
  );
  return response.json();
}

export default async function HotelsWithLargeLiving() {
  const data: TResponseGetData = await getData();
  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Hotels with large living room
      </Label>
      <ContainHotelLiving data={data} />
    </div>
  );
}

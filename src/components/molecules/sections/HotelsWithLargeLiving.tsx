import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainHotelLiving } from "@/components/molecules/contains/ContainHotelLiving";
import { getData } from "@/services/fetch";

export default async function HotelsWithLargeLiving() {
  const data: TResponseGetData = await getData({
    url: "large-living-room.json",
  });
  return (
    <div className="lg:mt-16 mt-12">
      <Label className="lg:text-lg text-base text-cyan-800 font-semibold">
        Hotels with large living room
      </Label>
      <ContainHotelLiving data={data} />
    </div>
  );
}

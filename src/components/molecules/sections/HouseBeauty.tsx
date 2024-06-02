import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainHouseBeauty } from "@/components/molecules/contains/ContainHouseBeauty";
import { getData } from "@/services/fetch";

export default async function HouseBeauty() {
  const data: TResponseGetData = await getData({ url: "backyard.json" });

  return (
    <div className="lg:mt-16 mt-12">
      <Label className="lg:text-lg text-base text-cyan-800 font-semibold">
        Houses with beauty backyard
      </Label>
      <ContainHouseBeauty data={data} />
    </div>
  );
}

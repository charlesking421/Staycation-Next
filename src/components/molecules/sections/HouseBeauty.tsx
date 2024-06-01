import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainHouseBeauty } from "@/components/molecules/contains/ContainHouseBeauty";

async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_STAGING}/json/backyard.json`
  );
  return response.json();
}

export default async function HouseBeauty() {
  const data: TResponseGetData = await getData();

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Houses with beauty backyard
      </Label>
      <ContainHouseBeauty data={data} />
    </div>
  );
}

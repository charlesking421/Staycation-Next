import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainHouseBeauty } from "@/components/molecules/contains/ContainHouseBeauty";

type TResponseGetData = Array<{
  name: string;
  image: string;
  location: string;
  price: number;
  description: string;
  isPopular: boolean;
}>;

async function getData() {
  const response = await fetch("http://localhost:3000/json/backyard.json");
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

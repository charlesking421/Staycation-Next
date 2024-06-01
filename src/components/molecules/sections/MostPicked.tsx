import React from "react";

import { Label } from "@/components/atoms/Label";
import { ContainMostPicked } from "@/components/molecules/contains/ContainMostPicked";

export type TResponseGetData = Array<{
  name: string;
  image: string;
  location: string;
  price: number;
  description: string;
  isPopular: boolean;
}>;

async function getData() {
  const response = await fetch("http://localhost:3000/json/most-picked.json");
  return response.json();
}

export default async function MostPicked() {
  const data: TResponseGetData = await getData();

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">Most Picked</Label>

      <div className="grid grid-cols-12 gap-4 mt-5">
        <ContainMostPicked data={data} />
      </div>
    </div>
  );
}

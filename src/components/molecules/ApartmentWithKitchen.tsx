import React from "react";

import { Label } from "@/components/atoms/Label";
import { ContainApartmenKitchen } from "./contains/ContainApartmenKitchen";

type TResponseGetData = Array<{
  name: string;
  image: string;
  location: string;
  price: number;
  isPopular: boolean;
  description: string;
}>;

async function getData() {
  const response = await fetch(
    "http://localhost:3000/json/apartment-kitchen-set.json"
  );
  return response.json();
}

export default async function ApartmentWithKitchen() {
  const data: TResponseGetData = await getData();

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Apartments with kitchen set
      </Label>

      <ContainApartmenKitchen data={data} />
    </div>
  );
}

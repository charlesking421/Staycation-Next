import React from "react";

import { Label } from "@/components/atoms/Label";
import { ContainApartmenKitchen } from "@/components/molecules/contains/ContainApartmenKitchen";

async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_STAGING}/json/apartment-kitchen-set.json`
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

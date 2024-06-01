import React from "react";

import { Label } from "@/components/atoms/Label";
import { ContainApartmenKitchen } from "@/components/molecules/contains/ContainApartmenKitchen";
import { getData } from "@/services/fetch";

export default async function ApartmentWithKitchen() {
  const data: TResponseGetData = await getData({
    url: "apartment-kitchen-set.json",
  });

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Apartments with kitchen set
      </Label>

      <ContainApartmenKitchen data={data} />
    </div>
  );
}

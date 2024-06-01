import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainTreasure } from "@/components/molecules/contains/ContainTreasure";

async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_STAGING}/json/treasure-to-choose.json`
  );
  return response.json();
}

export default async function SuggestionTreasure() {
  const data: TResponseGetData = await getData();

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Treasure to Choose
      </Label>

      <ContainTreasure data={data} />
    </div>
  );
}

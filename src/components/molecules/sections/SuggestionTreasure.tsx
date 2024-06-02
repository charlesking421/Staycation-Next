import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainTreasure } from "@/components/molecules/contains/ContainTreasure";
import { getData } from "@/services/fetch";

export default async function SuggestionTreasure() {
  const data: TResponseGetData = await getData({
    url: "treasure-to-choose.json",
  });

  return (
    <div className="lg:mt-16 mt-6">
      <Label className="lg:text-lg text-base text-cyan-800 font-semibold">
        Treasure to Choose
      </Label>

      <ContainTreasure data={data} />
    </div>
  );
}

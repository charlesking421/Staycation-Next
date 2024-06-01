import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainTreasure } from "@/components/molecules/contains/ContainTreasure";
import { getData } from "@/services/fetch";

export default async function SuggestionTreasure() {
  const data: TResponseGetData = await getData({
    url: "treasure-to-choose.json",
  });

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Treasure to Choose
      </Label>

      <ContainTreasure data={data} />
    </div>
  );
}

import React from "react";
import { Label } from "@/components/atoms/Label";
import { ContainTreasure } from "@/components/molecules/contains/ContainTreasure";

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
    "http://localhost:3000/json/treasure-to-choose.json"
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

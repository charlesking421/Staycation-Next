import React from "react";

import { Label } from "@/components/atoms/Label";
import { getData } from "@/services/fetch";
import { ContainMostPicked } from "./ContainMostPicked";

export default async function MostPicked() {
  const data: TResponseGetData = await getData({ url: "most-picked.json" });

  return (
    <div className="mt-16">
      <Label className="lg:text-lg text-base text-cyan-800 font-semibold">
        Most Picked
      </Label>

      <div className="grid lg:grid-cols-12 gap-4 mt-5">
        <ContainMostPicked data={data} />
      </div>
    </div>
  );
}

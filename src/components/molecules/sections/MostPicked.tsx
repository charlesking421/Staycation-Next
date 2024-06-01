import React from "react";

import { Label } from "@/components/atoms/Label";
import { ContainMostPicked } from "@/components/molecules/contains/ContainMostPicked";
import { getData } from "@/services/fetch";

export default async function MostPicked() {
  const data: TResponseGetData = await getData({ url: "most-picked.json" });

  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">Most Picked</Label>

      <div className="grid grid-cols-12 gap-4 mt-5">
        <ContainMostPicked data={data} />
      </div>
    </div>
  );
}

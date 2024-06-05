import React from "react";
import { getData } from "@/services/fetch";
import ListHotels from "@/components/molecules/ListHotels";

export default async function SuggestionTreasure() {
  const data: TResponseGetData = await getData({
    url: "treasure-to-choose.json",
  });

  return <ListHotels title="Treasure to Choose" data={data} />;
}

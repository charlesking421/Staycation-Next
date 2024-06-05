import React from "react";
import { getData } from "@/services/fetch";
import ListHotels from "@/components/molecules/ListHotels";

export default async function HotelsWithLargeLiving() {
  const data: TResponseGetData = await getData({
    url: "large-living-room.json",
  });

  return <ListHotels title=" Hotels with large living room" data={data} />;
}

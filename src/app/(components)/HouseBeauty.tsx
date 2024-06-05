import React from "react";
import { getData } from "@/services/fetch";
import ListHotels from "@/components/molecules/ListHotels";

export default async function HouseBeauty() {
  const data: TResponseGetData = await getData({ url: "backyard.json" });

  return <ListHotels title=" Houses with beauty backyard" data={data} />;
}

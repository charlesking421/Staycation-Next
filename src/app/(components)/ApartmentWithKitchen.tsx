import React from "react";

import { getData } from "@/services/fetch";
import ListHotels from "@/components/molecules/ListHotels";

export default async function ApartmentWithKitchen() {
  const data: TResponseGetData = await getData({
    url: "apartment-kitchen-set.json",
  });

  return <ListHotels title="Apartments with kitchen set" data={data} />;
}

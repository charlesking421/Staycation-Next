"use client";

import React from "react";
import Card from "@/components/molecules/Card";
import { useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { TResponseGetData } from "../MostPicked";

export const detailCardItem = atomWithStorage<TResponseGetData[0]>("detail", {
  name: "",
  image: "",
  location: "",
  price: 0,
  isPopular: false,
});

export function ContainHouseBeauty({ data }: { data: TResponseGetData }) {
  const setAtomValue = useSetAtom(detailCardItem);

  const onViewDetails = (details: TResponseGetData[0]) => {
    setAtomValue(details);
  };

  return (
    <div className="grid grid-cols-4 gap-8 mt-5">
      {data.map((item, index) => (
        <div key={index}>
          <Card
            onClick={() => onViewDetails(item)}
            hasBadge={item.isPopular}
            badgeLabel={
              <>
                <strong>Popular</strong> Choice
              </>
            }
            images={item.image}
            className="relative aspect-video"
            name={item.name}
            place={item.location}
            hasInsideDescription={false}
            hasBottomDescription
          />
        </div>
      ))}
    </div>
  );
}

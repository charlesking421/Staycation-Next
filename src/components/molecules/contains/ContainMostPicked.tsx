"use client";

import React from "react";
import Card from "@/components/molecules/Card";
import { useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const detailCardItem = atomWithStorage<TResponseGetData[0]>("detail", {
  name: "",
  image: "",
  location: "",
  price: 0,
  isPopular: false,
  description: "",
});

export function ContainMostPicked({ data }: { data: TResponseGetData }) {
  const setAtomValue = useSetAtom(detailCardItem);

  const onViewDetails = (details: TResponseGetData[0]) => {
    setAtomValue(details);
  };
  return (
    <>
      <div className="col-span-4 flex items-stretch">
        <Card
          onClick={() => onViewDetails(data[0])}
          hasShadowImage
          price="$50"
          name={data[0].name}
          place={data[0].location}
          className="relative w-full h-full cursor-pointer rounded-2xl overflow-hidden"
          images={data[0].image}
          hasBadge={true}
          badgeLabel={
            <>
              <strong className="font-semibold">{data[0].price}%</strong> per
              night
            </>
          }
        />
      </div>
      <div className="col-span-8 grid grid-cols-2 gap-8">
        {data.map((item, index) => {
          if (index !== 0) {
            return (
              <Card
                key={index}
                onClick={() => onViewDetails(item)}
                hasShadowImage
                price={String(item.price)}
                hasBadge={true}
                badgeLabel={
                  <>
                    <strong className="font-semibold">{item.price}$</strong> per
                    night
                  </>
                }
                name={item.name}
                place={item.location}
                className="relative aspect-video rounded-2xl overflow-hidden"
                images={item.image}
              />
            );
          }
        })}
      </div>
    </>
  );
}

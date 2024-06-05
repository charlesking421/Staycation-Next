"use client";

import React from "react";
import Card from "@/components/molecules/Card";
import { useSetAtom } from "jotai";
import { detailCardItem } from "@/lib/jotai";
import { ScrollArea, ScrollBar } from "./ScrollArea";

export function CardHotels({ data }: { data: TResponseGetData }) {
  const setAtomValue = useSetAtom(detailCardItem);

  const onViewDetails = (details: TResponseGetData[0]) => {
    setAtomValue(details);
  };

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md mt-4">
      <div className="flex w-full lg:space-x-4 lg:p-4 space-x-2">
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
              className="relative w-[263px] h-[180px] shrink-0"
              name={item.name}
              place={item.location}
              hasInsideDescription={false}
              hasBottomDescription
            />
          </div>
        ))}
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
}

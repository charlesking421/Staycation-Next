"use client";

import React from "react";
import Card from "@/components/molecules/Card";
import { useSetAtom } from "jotai";
import { ScrollArea, ScrollBar } from "../ScrollArea";
import { detailCardItem } from "@/lib/jotai";

export function ContainApartmenKitchen({ data }: { data: TResponseGetData }) {
  const setAtomValue = useSetAtom(detailCardItem);

  const onViewDetails = (details: TResponseGetData[0]) => {
    setAtomValue(details);
  };

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <div className="flex w-full space-x-4 p-4">
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

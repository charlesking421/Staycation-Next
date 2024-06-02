"use client";

import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";
import { detailCardItem } from "@/components/molecules/contains/ContainMostPicked";

export default function ImageDetailRoom() {
  const { image } = useAtomValue(detailCardItem);
  return (
    <div className="grid lg:grid-cols-2 lg:gap-8 lg:mt-16">
      <div className="lg:col-span-1">
        <div className="relative aspect-square lg:w-full lg:h-full">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={image ?? "/detail-booking.png"}
            fill
            priority
            objectFit="contain"
            alt="big.jpg"
          />
        </div>
      </div>
      <div className="lg:col-span-1 lg:grid-rows-2 lg:space-y-8">
        <div>
          <div className="relative aspect-video">
            <Image
              src="/detail-village/small-1.jpg"
              fill
              priority
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="small-1.jpg"
            />
          </div>
        </div>
        <div>
          <div className="relative aspect-video">
            <Image
              src="/detail-village/small.jpg"
              fill
              objectFit="contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="small.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useAtomValue } from "jotai";
import {
  AirVent,
  Bath,
  BedDouble,
  Home,
  Monitor,
  Refrigerator,
  Utensils,
  Wifi,
} from "lucide-react";
import React from "react";
import { detailCardItem } from "./contains/ContainMostPicked";

export default function DescriptionDetailRoom() {
  const { description } = useAtomValue(detailCardItem);

  return (
    <div className="cols-span-1">
      <p className="text-xl text-cyan-800 mb-4">About the place</p>

      <p className="text-gray-400 font-light text-base">{description}</p>

      <div className="grid-cols-4 grid gap-8 mt-6">
        <div className="cols-span-1">
          <BedDouble size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">5</strong> bedroom
          </p>
        </div>
        <div className="cols-span-1">
          <Home size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">1</strong> living room
          </p>
        </div>
        <div className="cols-span-1">
          <Bath size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">2</strong> bathroom
          </p>
        </div>
        <div className="cols-span-1">
          <Utensils size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">1</strong> dining room
          </p>
        </div>
        <div className="cols-span-1">
          <Wifi size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">25</strong> mbps/s
          </p>
        </div>
        <div className="cols-span-1">
          <AirVent size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">7</strong> unit ready
          </p>
        </div>
        <div className="cols-span-1">
          <Refrigerator size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">2</strong> refigrator
          </p>
        </div>
        <div className="cols-span-1">
          <Monitor size={28} className="text-cyan-500" />
          <p className="text-gray-400 font-light mt-2">
            <strong className="text-cyan-800">3</strong> television
          </p>
        </div>
      </div>
    </div>
  );
}

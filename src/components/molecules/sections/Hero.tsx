import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BaggageClaim, Clapperboard, MapPinned } from "lucide-react";

import { Button } from "@/components/atoms/Button";
import ItemWithIcon from "@/components/atoms/ItemWithIcon";

const data = [
  {
    icon: BaggageClaim,
    label: "travelers",
    total: "80,409",
  },
  {
    icon: Clapperboard,
    label: "treasure",
    total: "862",
  },
  {
    icon: MapPinned,
    label: "cities",
    total: "1,492",
  },
];

export default function Hero() {
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="col-span-1">
        <h1 className="text-4xl leading-normal font-semibold">
          Forget Busy Work, <br /> Start Next Vacation
        </h1>
        <p className="text-gray-500 text-base w-1/2 mt-5 mb-7">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>

        <Link href="/charless-village">
          <Button className="bg-cyan-600 font-light text-base">
            Show Me Now
          </Button>
        </Link>

        <div className="flex items-center gap-6 mt-14">
          {data.map((item, index) => (
            <ItemWithIcon label={item.label} total={item.total} key={index}>
              <item.icon size={32} className="text-cyan-800" />
            </ItemWithIcon>
          ))}
        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <div className="relative w-[520px] h-[410px]">
          <Image
            className="absolute !-left-20"
            src="/hero-landing.png"
            fill
            priority
            alt="hero-landing-page"
          />
          <div className=" w-[480px] h-[410px] border border-gray-300 absolute -bottom-8 -z-10 rounded-2xl left-0"></div>
        </div>
      </div>
    </div>
  );
}

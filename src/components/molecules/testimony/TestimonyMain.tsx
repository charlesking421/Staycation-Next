import Image from "next/image";
import React from "react";
import { Button } from "../../atoms/Button";
import Ratings from "../../atoms/Ratings";

export default function TestimonyMain() {
  return (
    <div className="grid grid-cols-2 mt-24">
      <div className="col-span-1">
        <div className="relative w-[365px] h-[501px]">
          <Image
            className="absolute !left-10 !top-10"
            src="/family-feedback.png"
            fill
            priority
            alt="family-feedback-page"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className=" w-[365px] h-[501px] border border-gray-300 absolute -z-10 rounded-2xl"></div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-xl font-normal text-cyan-800 mb-8">Happy Family</h1>
        <Ratings count={4} />
        <h1 className="text-4xl font-normal text-cyan-800 w-4/5 mt-8">
          What a great trip with my family and I should try again next time soon
          ...
        </h1>
        <p className="text-gray-400 text-base w-1/2 mt-5 mb-7">
          Diko Mahendra, Frontend Developer
        </p>
        <div>
          <Button className="bg-cyan-600 font-light text-base">
            Read Their Story
          </Button>
        </div>
      </div>
    </div>
  );
}

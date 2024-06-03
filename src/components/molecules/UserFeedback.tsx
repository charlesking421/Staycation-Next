import Image from "next/image";
import React from "react";
import { Button } from "@/components/atoms/Button";
import Ratings from "@/components/atoms/Ratings";

export default function UserFeedback() {
  return (
    <div className="grid lg:grid-cols-2 lg:mt-24 mt-12">
      <div className="col-span-1">
        <div className="relative lg:w-[400px] lg:h-[501px] aspect-square">
          <Image
            className="lg:absolute lg:!left-10 lg:!top-10"
            src="/family-feedback.png"
            fill
            priority
            alt="family-feedback-page"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="hidden lg:block w-[365px] h-[501px] border border-gray-300 absolute -z-10 rounded-2xl"></div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="lg:text-xl text-xl font-normal text-cyan-800 lg:mb-8 mt-2 lg:mt-0 mb-3">
          Happy Family
        </h1>
        <Ratings count={4} />
        <h1 className="lg:text-4xl text-base font-normal text-cyan-800 w-4/5 lg:mt-8 mt-4">
          What a great trip with my family and I should try again next time soon
          ...
        </h1>
        <p className=" text-gray-400 lg:text-base text-xs w-1/2 mt-5 mb-7">
          Diko Mahendra, Frontend Developer
        </p>
        <div>
          <Button className="bg-cyan-600 font-light lg:text-base text-xs">
            Read Their Story
          </Button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import { LabelHeader } from "@/components/molecules/headers/HeaderBookingStep";

export default function Step3() {
  return (
    <>
      <LabelHeader label="Yeay completed" />
      <div className="lg:mt-24 mt-6 flex flex-col items-center justify-center">
        <div className="relative w-[360px] h-[360px]">
          <Image fill alt="completed-payment" src="/completed-payment.jpg" />
        </div>

        <p className="text-gray-400 lg:text-lg text-sm lg:w-1/3 w-full text-center">
          We will inform you via email later once the transaction has been
          accepted
        </p>
      </div>
    </>
  );
}

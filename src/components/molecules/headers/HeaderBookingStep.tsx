import React from "react";
import { twMerge } from "tailwind-merge";

type TLabelHeader = {
  description?: string;
  label?: string;
};

export const LabelHeader = ({ label, description }: TLabelHeader) => {
  return (
    <div className="mt-14 text-center">
      <p className="text-4xl text-cyan-800 font-semibold">{label}</p>
      {description && (
        <p className="text-xl text-gray-400 font-light mt-4">{description}</p>
      )}
    </div>
  );
};

export default function HeaderBookingStep({
  step,
  currentStep,
}: {
  currentStep: number;
  step: number;
}) {
  return (
    <div className="flex justify-center items-center mt-14">
      {[...Array(step)].map((_, index) => (
        <>
          <div
            key={index + 1}
            className={twMerge(
              "w-20 h-20 rounded-full border border-gray-300 p-2 flex justify-center items-center",
              currentStep >= index
                ? "bg-cyan-500 text-white"
                : "bg-gray-100 text-gray-300"
            )}
          >
            <p className="text-2xl">{index + 1}</p>
          </div>
          {!(index + 1 === step) && (
            <div
              className={twMerge(
                "h-1 w-40",
                currentStep <= index ? "bg-gray-300" : "bg-cyan-500"
              )}
            />
          )}
        </>
      ))}
    </div>
  );
}

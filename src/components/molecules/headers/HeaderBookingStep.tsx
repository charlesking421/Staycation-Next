import React from "react";
import { twMerge } from "tailwind-merge";

type TLabelHeader = {
  description?: string;
  label?: string;
};

export const LabelHeader = ({ label, description }: TLabelHeader) => {
  return (
    <div className="lg:mt-14 mt-8 text-center">
      <p className="lg:text-4xl text-xl text-cyan-800 font-semibold">{label}</p>
      {description && (
        <p className="lg:text-xl text-sm text-gray-400 font-light lg:mt-4 mt-2">
          {description}
        </p>
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
    <div className="flex justify-center items-center lg:mt-14 mt-4">
      {[...Array(step)].map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={twMerge(
              "lg:w-20 lg:h-20 w-12 h-12 rounded-full border border-gray-300 p-2 flex justify-center items-center",
              currentStep >= index
                ? "bg-cyan-500 text-white"
                : "bg-gray-100 text-gray-300"
            )}
          >
            <p className="lg:text-2xl text-base">{index + 1}</p>
          </div>
          {index + 1 !== step && (
            <div
              className={twMerge(
                "h-1 w-20 lg:w-40",
                currentStep <= index ? "bg-gray-300" : "bg-cyan-500"
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

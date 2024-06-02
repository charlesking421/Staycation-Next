"use client";

import { useRouter } from "next/navigation";
import React, { useState, useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/atoms/Button";
import Step1 from "@/components/molecules/steps/Step1";
import Step2 from "@/components/molecules/steps/Step2";
import Step3 from "@/components/molecules/steps/Step3";
import HeaderBookingStep from "@/components/molecules/headers/HeaderBookingStep";

import {
  SchemaInformation,
  schemaBankAccount,
  schemaInformation,
} from "@/lib/schema";
import { step } from "@/lib/jotai";

const BookingDestination = () => {
  const currentStep = useAtomValue(step);
  const setStep = useSetAtom(step);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const getSchema = useCallback(() => {
    return currentStep === 0 ? schemaInformation : schemaBankAccount;
  }, [currentStep]);

  const methods = useForm<SchemaInformation>({
    resolver: zodResolver(getSchema()),
  });

  const onSubmit = () => {
    if (currentStep < 2) {
      setStep(currentStep + 1);
    } else {
      setIsLoading(true);

      setTimeout(() => {
        setStep(currentStep + 1);
        setIsLoading(false);
      }, 3000);
    }
  };

  const renderStepComponent = useCallback(() => {
    switch (currentStep) {
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 0:
      default:
        return <Step1 />;
    }
  }, [currentStep]);

  const handleCancel = () => {
    if (currentStep === 0) {
      router.back();
    } else if (currentStep !== 2) {
      setStep(0);
    } else {
      router.push("/");
    }
  };

  return (
    <main className="container mx-auto">
      <HeaderBookingStep step={3} currentStep={currentStep} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {renderStepComponent()}

          <div className="flex justify-center items-center mt-24">
            <div className="flex flex-col gap-4 w-[20rem]">
              {currentStep !== 2 && (
                <Button
                  type="submit"
                  size="lg"
                  className="bg-cyan-800 text-base w-full"
                >
                  {isLoading ? "...Booking process" : "Continue to Book"}
                </Button>
              )}

              <Button
                onClick={handleCancel}
                size="lg"
                disabled={isLoading}
                type="button"
                className={`text-base w-full ${
                  currentStep === 2 ? "bg-cyan-800" : "bg-gray-200"
                }`}
              >
                {currentStep === 2
                  ? "Back to Home"
                  : currentStep === 0
                  ? "Cancel"
                  : "Back"}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </main>
  );
};

export default BookingDestination;

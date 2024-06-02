"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
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

export default function BookingDestination() {
  const _step = useAtomValue(step);
  const setStepValue = useSetAtom(step);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<SchemaInformation>({
    resolver: zodResolver(_step === 0 ? schemaInformation : schemaBankAccount),
  });

  const onSubmit = () => {
    if (_step <= 0) {
      setStepValue(_step + 1);
    } else if (_step === 1) {
      setIsLoading(true);

      setTimeout(() => {
        setStepValue(_step + 1);
        setIsLoading(false);
      }, 3000);
    }
  };

  const switchStep = () => {
    switch (_step) {
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 0:
      default:
        return <Step1 />;
    }
  };

  const onCancel = () => {
    if (_step === 0) {
      router.back();
    } else if (_step !== 2) {
      setStepValue(0);
    } else {
      router.push("/");
    }
  };

  return (
    <main className="container mx-auto">
      <HeaderBookingStep step={3} currentStep={_step} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {switchStep()}

          <div className="flex justify-center items-center mt-24">
            <div className="flex flex-col gap-4 w-[20rem]">
              {_step !== 2 && (
                <Button
                  type="submit"
                  size="lg"
                  className="bg-cyan-800 text-base w-full"
                >
                  {isLoading
                    ? "...loading"
                    : _step >= 0
                    ? "Continue to Book"
                    : "Next"}
                </Button>
              )}

              <Button
                onClick={onCancel}
                size="lg"
                disabled={isLoading}
                type="button"
                className={`text-base w-full ${
                  _step === 2 ? "bg-cyan-800" : "bg-gray-200"
                }`}
              >
                {_step === 2 ? "Back to Home" : _step === 0 ? "Cancel" : "Back"}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}

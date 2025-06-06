"use client";

import { useRouter } from "next/navigation";
import React, { useState, useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/atoms/Button";
import BookingInformation from "@/app/booking/[payments]/(components)/steppers/BookingInformation";
import PaymentInformation from "@/app/booking/[payments]/(components)/steppers/PaymentInformation";
import BookingSuccess from "@/app/booking/[payments]/(components)/steppers/BookingSuccess";
import HeaderBookingStep from "@/app/booking/[payments]/(components)/HeaderBookingStep";

import {
  SchemaInformation,
  schemaBankAccount,
  schemaInformation,
} from "@/lib/schema";
import { atomBooking, detailCardItem, step } from "@/lib/jotai";
import { useResetAtom } from "jotai/utils";
import { twMerge } from "tailwind-merge";

const BookingPayments = () => {
  const currentStep = useAtomValue(step);
  const setStep = useSetAtom(step);
  const resetDetailBooking = useResetAtom(atomBooking);
  const resetDetailCard = useResetAtom(detailCardItem);

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const getSchema = useCallback(() => {
    return currentStep === 0 ? schemaInformation : schemaBankAccount;
  }, [currentStep]);

  const methods = useForm<SchemaInformation>({
    resolver: zodResolver(getSchema()),
  });

  const onSubmit = () => {
    if (currentStep < 1) {
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
        return <PaymentInformation />;
      case 2:
        return <BookingSuccess />;
      case 0:
      default:
        return <BookingInformation />;
    }
  }, [currentStep]);

  const onHandleCancel = async () => {
    if (currentStep === 0) {
      router.back();
    } else if (currentStep !== 2) {
      setStep(0);
    } else {
      window.location.href = "/";
      resetDetailBooking();
      resetDetailCard();
    }
  };

  return (
    <main className="lg:container lg:mx-auto lg:px-0 px-4 lg:mt-28">
      <HeaderBookingStep step={3} currentStep={currentStep} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {renderStepComponent()}

          <div className="flex justify-center items-center mt-24">
            <div className="flex flex-col gap-4 lg:w-[20rem] w-full">
              {currentStep !== 2 && (
                <Button
                  type="submit"
                  size="lg"
                  className="bg-cyan-800 lg:text-base text-sm w-full"
                >
                  {isLoading ? "...Booking process" : "Continue to Book"}
                </Button>
              )}

              <Button
                onClick={onHandleCancel}
                size="lg"
                disabled={isLoading}
                type="button"
                className={twMerge(
                  "w-full lg:text-base text-sm",
                  currentStep === 2 ? "bg-cyan-800" : "bg-gray-200"
                )}
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

export default BookingPayments;

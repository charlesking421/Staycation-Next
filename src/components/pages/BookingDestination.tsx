"use client";

import HeaderBookingStep from "@/components/molecules/headers/HeaderBookingStep";
import React, { useState } from "react";

import { Button } from "@/components/atoms/Button";
import Step1 from "../molecules/steps/Step1";
import Step2 from "../molecules/steps/Step2";
import Step3 from "../molecules/steps/Step3";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useRouter } from "next/navigation";

const schema = z.object({
  first_name: z.string().min(2).max(20),
  last_name: z.string().min(2).max(20),
  email: z.string().email(),
  phone_number: z.string().superRefine((value, ctx) => {
    if (!value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Phone number is required`,
      });

      return;
    }

    if (!/^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Invalid phone number`,
      });
    }
  }),
});

const uploadInvoice = z.instanceof(FileList).superRefine((val, ctx) => {
  if (val.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Kindly upload your invoice`,
    });
    return;
  }

  const file = val[0];

  if (file.size > 2000000) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Max size 2MB`,
    });
  }

  if (!file.type.includes("pdf")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Format should be PDF`,
    });
  }
});

const schema2 = z.object({
  upload_invoice: uploadInvoice,
  bank: z.string().min(2).max(20),
  account_name: z.string().min(2).max(20),
});

export type Schema = z.infer<typeof schema>;
export type Schema2 = z.infer<typeof schema2>;

const combineSchema = schema.merge(schema2);

export type CombinedSchema = z.infer<typeof combineSchema>;

export const step = atom<number>(0);

export default function BookingDestination() {
  const _step = useAtomValue(step);
  const setStepValue = useSetAtom(step);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<Schema>({
    resolver: zodResolver(_step === 0 ? schema : schema2),
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

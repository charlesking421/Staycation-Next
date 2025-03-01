import React from "react";
import { LabelHeader } from "../HeaderBookingStep";
import { InputWithLabel } from "@/components/atoms/InputWithLabel";
import { InputFile } from "@/components/atoms/InputFile";
import BankAccount from "@/components/atoms/BankAccount";
import { useFormContext } from "react-hook-form";
import { SchemaBankAccount } from "@/lib/schema";
import { useAtomValue } from "jotai";
import { atomBooking } from "@/lib/jotai";

export default function PaymentInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SchemaBankAccount>();

  const { total } = useAtomValue(atomBooking);

  const subtotal = total - total * 0.1;

  return (
    <>
      <LabelHeader
        label=" Booking Information"
        description="Please fill up the blank fields below"
      />

      <div className="lg:mt-24 mt-8 grid grid-cols-2 gap-8">
        <div className="lg:col-span-1 col-span-2 lg:border-r-2 lg:border-0 border-gray-200 lg:pl-20">
          <p className="lg:text-lg text-base text-cyan-800">
            Payment transfer:
          </p>
          <p className="lg:text-base text-sm text-cyan-800 mt-5">
            Tax: <strong>10%</strong>
          </p>
          <p className="lg:text-base text-sm text-cyan-800 my-3">
            Sub total: <strong>${subtotal} USD</strong>
          </p>
          <p className="lg:text-base text-sm text-cyan-800">
            Total: <strong>${total} USD</strong>
          </p>

          <BankAccount
            images="/images/logo-bank/logo_bank.jpg"
            bankName="Bank Central Asia"
            noRek="2208 1996"
            name="Pavlo Radionov"
          />
          <BankAccount
            images="/images/logo-bank/logo_bank-1.jpg"
            bankName="Bank Mandiri"
            noRek="2208 1996"
            name="Pavlo Radionov"
          />
        </div>
        <div className="lg:col-span-1 col-span-2 lg:space-y-5 space-y-3 lg:pr-[12rem] lg:mt-0 mt-8">
          <InputFile
            required
            register={register}
            message={errors?.upload_invoice?.message as string}
            name="upload_invoice"
            label="Upload Invoice"
            type="file"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            required
            name="bank"
            register={register}
            label="Bank Name"
            message={errors?.bank?.message as string}
            placeholder="Please type here ..."
          />
          <InputWithLabel
            required
            name="account_name"
            register={register}
            label="Account Name"
            message={errors?.account_name?.message as string}
            placeholder="Please type here ..."
          />
        </div>
      </div>
    </>
  );
}

import React from "react";
import { LabelHeader } from "../headers/HeaderBookingStep";
import { InputWithLabel } from "@/components/atoms/InputWithLabel";
import { InputFile } from "@/components/atoms/InputFile";
import BankAccount from "@/components/atoms/BankAccount";
import { useFormContext } from "react-hook-form";
import { Schema2 } from "@/components/pages/BookingDestination";

export default function Step2() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema2>();

  return (
    <>
      <LabelHeader
        label=" Booking Information"
        description="Please fill up the blank fields below"
      />

      <div className="mt-24 grid grid-cols-2 gap-8">
        <div className="col-span-1 border-r-2 border-0 border-gray-200 pl-20">
          <p className="text-lg text-cyan-800">Transfer Pembayaran:</p>
          <p className="text-base text-cyan-800 mt-5">
            Tax: <strong>10%</strong>
          </p>
          <p className="text-base text-cyan-800 my-3">
            Sub total: <strong>$480 USD</strong>
          </p>
          <p className="text-base text-cyan-800">
            Total: <strong>$580 USD</strong>
          </p>

          <BankAccount
            images="/logo-bank/logo_bank.jpg"
            bankName="Bank Central Asia"
            noRek="2208 1996"
            name="Diko Mahendra"
          />
          <BankAccount
            images="/logo-bank/logo_bank-1.jpg"
            bankName="Bank Mandiri"
            noRek="2208 1996"
            name="Diko Mahendra"
          />
        </div>
        <div className="col-span-1 space-y-5 pr-[12rem]">
          <InputFile
            required
            register={register}
            message={errors?.upload_invoice?.message as string}
            name="upload_invoice"
            label="Upload Bukti Transfer"
            type="file"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            required
            name="bank"
            register={register}
            label="Asal Bank"
            message={errors?.bank?.message as string}
            placeholder="Please type here ..."
          />
          <InputWithLabel
            required
            name="account_name"
            register={register}
            label="Nama Pengirim"
            message={errors?.account_name?.message as string}
            placeholder="Please type here ..."
          />
        </div>
      </div>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { InputFile } from "@/components/ui/inputFile";
import { InputWithLabel } from "@/components/ui/inputWithLabel";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="container mx-auto">
      {/* Header step */}
      <div className="flex justify-center items-center mt-14">
        <div className="w-20 h-20 rounded-full border border-gray-300 p-2 flex justify-center items-center">
          <p className="text-2xl">1</p>
        </div>
        <div className="h-1 w-40 bg-gray-300" />
        <div className="w-20 h-20 rounded-full border border-gray-300 p-2 flex justify-center items-center">
          <p className="text-2xl">2</p>
        </div>
        <div className="h-1 w-40 bg-gray-300" />
        <div className="w-20 h-20 rounded-full border border-gray-300 p-2 flex justify-center items-center">
          <p className="text-2xl">2</p>
        </div>
      </div>

      {/* Booking information */}
      {/* <div className="mt-14 text-center">
        <p className="text-4xl text-cyan-800 font-semibold">
          Booking Information
        </p>
        <p className="text-xl text-gray-400 font-light mt-4">
          Please fill up the blank fields below
        </p>
      </div> */}
      <div className="mt-14 text-center">
        <p className="text-4xl text-cyan-800 font-semibold">Yay! Completed</p>
      </div>

      {/* Form Booking information */}
      {/* <div className="mt-24 grid grid-cols-2 gap-8">
        <div className="col-span-1 border-r-2 border-0 border-gray-200 pr-12">
          <div className="relative aspect-video">
            <Image
              src="/beauty-backyard/pic-1.jpg"
              fill
              priority
              alt="beauty-backyard-1"
            />
          </div>

          <div className="flex justify-between items-center mt-8">
            <div>
              <p className="capitalize text-cyan-800 text-2xl font-semibold">
                Podo Wae
              </p>
              <p className="capitalize text-gray-300 text-lg">
                Madiun, Indonesia
              </p>
            </div>
            <p className="text-2xl font-light text-gray-300">
              <span className="text-cyan-800 font-semibold">$480 USD</span> /
              night
            </p>
          </div>
        </div>
        <div className="col-span-1 space-y-5 pr-[12rem]">
          <InputWithLabel
            label="First Name"
            type="email"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Last Name"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Email Address"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Phone Number"
            placeholder="Please type here ..."
          />
        </div>
      </div> */}

      {/* Form Bank Payment */}
      {/* <div className="mt-24 grid grid-cols-2 gap-8">
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

          <div className="flex gap-4 mt-12">
            <div className="relative h-[30px] w-[60px]">
              <Image fill alt="image-bank-bca" src="/logo-bank/logo_bank.jpg" />
            </div>
            <div>
              <p className="text-base text-cyan-900">Bank Central Asia</p>
              <p className="text-base text-cyan-900">2208 1996</p>
              <p className="text-base text-cyan-900">BuildWith Angga</p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="relative h-[30px] w-[60px]">
              <Image
                fill
                alt="image-bank-bca"
                src="/logo-bank/logo_bank-1.jpg"
              />
            </div>
            <div>
              <p className="text-base text-cyan-900">Bank Mandiri</p>
              <p className="text-base text-cyan-900">2208 1996</p>
              <p className="text-base text-cyan-900">BuildWith Angga</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-5 pr-[12rem]">
          <InputFile
            label="Upload Bukti Transfer"
            type="file"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Asal Bank"
            placeholder="Please type here ..."
          />
          <InputWithLabel
            label="Nama Pengirim"
            placeholder="Please type here ..."
          />
        </div>
      </div> */}

      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="relative w-[360px] h-[360px]">
          <Image fill alt="completed-payment" src="/completed-payment.jpg" />
        </div>

        <p className="text-gray-400 text-lg w-1/3 text-center">
          We will inform you via email later once the transaction has been
          accepted
        </p>
      </div>

      {/* Button Submit */}
      <div className="flex justify-center items-center mt-24">
        <div className="flex flex-col gap-4 w-[20rem]">
          <Button size="lg" className="bg-cyan-800 text-base w-full">
            Continue to Book
          </Button>

          <Button size="lg" className="bg-gray-200 text-base w-full">
            Cancel
          </Button>
        </div>
      </div>
    </main>
  );
}

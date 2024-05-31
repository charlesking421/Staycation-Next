import Image from "next/image";
import React from "react";

type TPropsBankAccount = {
  images: string;
  bankName: string;
  noRek: string;
  name: string;
};

export default function BankAccount({
  bankName,
  images,
  name,
  noRek,
}: TPropsBankAccount) {
  return (
    <div className="flex gap-4 mt-12">
      <div className="relative h-[30px] w-[60px]">
        <Image fill alt="image-bank-bca" src={images} />
      </div>
      <div>
        <p className="text-base text-cyan-900">{bankName}</p>
        <p className="text-base text-cyan-900">{noRek}</p>
        <p className="text-base text-cyan-900">{name}</p>
      </div>
    </div>
  );
}

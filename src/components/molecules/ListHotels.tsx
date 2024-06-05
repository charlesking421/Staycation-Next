import React from "react";
import { Label } from "@/components/atoms/Label";
import { CardHotels } from "@/components/molecules/CardHotels";

type TPropsListHotels = {
  title: string;
  data: TResponseGetData;
};

// React server component
export default async function ListHotels({ data, title }: TPropsListHotels) {
  return (
    <div className="lg:mt-16 mt-12">
      <Label className="lg:text-lg text-base text-cyan-800 font-semibold">
        {title}
      </Label>
      {/* React client component */}
      <CardHotels data={data} />
    </div>
  );
}

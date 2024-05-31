import React from "react";
import { Label } from "../atoms/Label";
import Card from "./Card";

type TResponseGetData = Array<{
  name: string;
  image: string;
  location: string;
  price: number;
  isPopular: boolean;
}>;

async function getData() {
  const response = await fetch(
    "http://localhost:3000/json/treasure-to-choose.json"
  );
  return response.json();
}

export default async function SuggestionTreasure() {
  const data: TResponseGetData = await getData();
  return (
    <div className="mt-16">
      <Label className="text-lg text-cyan-800 font-semibold">
        Treasure to Choose
      </Label>

      <div className="grid grid-cols-4 gap-8 mt-5">
        {data.map((item, index) => (
          <div key={index}>
            <Card
              hasBadge={item.isPopular}
              badgeLabel={
                <>
                  <strong>Popular</strong> Choice
                </>
              }
              images={item.image}
              className="relative aspect-video"
              name={item.name}
              place={item.location}
              hasInsideDescription={false}
              hasBottomDescription
            />
          </div>
        ))}
      </div>
    </div>
  );
}

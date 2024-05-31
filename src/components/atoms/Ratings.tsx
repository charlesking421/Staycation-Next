import { Star } from "lucide-react";
import React from "react";

type TPropsRatings = {
  count: number;
};

export default function Ratings({ count }: TPropsRatings) {
  const validCount = Math.max(0, Math.min(count, 5));
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={28}
          fill={index < validCount ? "orange" : "white"}
          color="orange"
        />
      ))}
    </div>
  );
}

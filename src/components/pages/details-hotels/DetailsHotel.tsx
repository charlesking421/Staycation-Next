import React from "react";
import ImageDetailRoom from "@/app/[details-hotels]/(components)/ImageDetailRoom";
import FormPickRoom from "@/app/[details-hotels]/(components)/FormPickRoom";
import UserFeedback from "@/components/molecules/UserFeedback";
import HeaderBreadcrumb from "@/app/[details-hotels]/(components)/HeaderBreadcrumb";
import DescriptionDetailRoom from "@/app/[details-hotels]/(components)/DescriptionDetailRoom";
import SuggestionTreasure from "@/app/[details-hotels]/(components)/SuggestionTreasure";

export default function DetailsHotel() {
  return (
    <main className="lg:mx-auto lg:container lg:px-0 px-4 lg:mt-28">
      <HeaderBreadcrumb />

      <ImageDetailRoom />

      <div className="grid lg:grid-cols-2 lg:gap-8 lg:mt-16 mt-4">
        <DescriptionDetailRoom />
        <FormPickRoom />
      </div>

      <SuggestionTreasure />
      <UserFeedback />
    </main>
  );
}

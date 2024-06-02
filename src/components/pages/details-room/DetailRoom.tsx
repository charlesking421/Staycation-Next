import React from "react";
import HeaderBreadcrumb from "@/components/molecules/headers/HeaderBreadcrumb";
import ImageDetailRoom from "@/components/molecules/sections/ImageDetailRoom";
import DescriptionDetailRoom from "@/components/molecules/sections/DescriptionDetailRoom";
import FormPickRoom from "@/components/molecules/sections/FormPickRoom";
import SuggestionTreasure from "@/components/molecules/sections/SuggestionTreasure";
import TestimonyMain from "@/components/molecules/testimony/TestimonyMain";

export default function DetailRoom() {
  return (
    <main className="lg:mx-auto lg:container lg:px-0 px-4">
      <HeaderBreadcrumb />

      <ImageDetailRoom />

      <div className="grid lg:grid-cols-2 lg:gap-8 lg:mt-16 mt-4">
        <DescriptionDetailRoom />
        <FormPickRoom />
      </div>

      <SuggestionTreasure />
      <TestimonyMain />
    </main>
  );
}

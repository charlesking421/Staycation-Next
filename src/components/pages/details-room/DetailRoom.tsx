import React from "react";
import HeaderBreadcrumb from "@/components/molecules/headers/HeaderBreadcrumb";
import TestimoniDetail from "@/components/molecules/testimony/TestimonyDetail";
import ImageDetailRoom from "@/components/molecules/sections/ImageDetailRoom";
import DescriptionDetailRoom from "@/components/molecules/sections/DescriptionDetailRoom";
import FormPickRoom from "@/components/molecules/sections/FormPickRoom";
import SuggestionTreasure from "@/components/molecules/sections/SuggestionTreasure";

export default function DetailRoom() {
  return (
    <main className="container mx-auto">
      <HeaderBreadcrumb />

      <ImageDetailRoom />

      <div className="grid grid-cols-2 gap-8 mt-16">
        <DescriptionDetailRoom />
        <FormPickRoom />
      </div>

      <SuggestionTreasure />
      <TestimoniDetail />
    </main>
  );
}

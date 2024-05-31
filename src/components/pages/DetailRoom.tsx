import React from "react";
import HeaderBreadcrumb from "../molecules/headers/HeaderBreadcrumb";
import TestimoniDetail from "../molecules/testimony/TestimonyDetail";
import ImageDetailRoom from "../molecules/ImageDetailRoom";
import DescriptionDetailRoom from "../molecules/DescriptionDetailRoom";
import FormPickRoom from "../molecules/FormPickRoom";
import SuggestionTreasure from "../molecules/SuggestionTreasure";

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

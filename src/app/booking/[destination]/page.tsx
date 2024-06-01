import BookingDestination from "@/components/pages/details-booking/BookingDestination";
import MainLayout from "@/layouts/MainLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import React from "react";

export default function page() {
  return (
    <SecondaryLayout>
      <BookingDestination />;
    </SecondaryLayout>
  );
}

import BookingPayments from "@/components/pages/booking-payments/BookingPayments";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import React from "react";

type PropsParams = {
  params: {
    payments: string;
  };
};

export async function generateMetadata({ params }: PropsParams) {
  const route: string = params.payments;
  const title = route.replaceAll("-", " ");

  return {
    title: `Booking Hotel | ${title}`,
  };
}

export default function page() {
  return (
    <SecondaryLayout>
      <BookingPayments />
    </SecondaryLayout>
  );
}

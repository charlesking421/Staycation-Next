import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import React from "react";

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar logoOnly />
      {children}
      <Footer />
    </main>
  );
}

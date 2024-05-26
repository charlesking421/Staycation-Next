import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default function page() {
  return (
    <main className="container mx-auto">
      {/* Label - section */}
      <header className="flex items-center justify-center text-center relative mt-16">
        <div className="absolute left-0">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-cyan-800" href="/components">
                  House Details
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <p className="text-4xl text-cyan-800 font-semibold">Village Angga</p>
          <p className="text-base text-gray-400 mt-2">Bogor, Indonesia</p>
        </div>
      </header>
    </main>
  );
}

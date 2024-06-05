"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import { detailCardItem } from "@/lib/jotai";
import { useAtomValue } from "jotai";
import React from "react";

export default function HeaderBreadcrumb() {
  const { name, location } = useAtomValue(detailCardItem);

  return (
    <header className="flex items-center justify-center text-center relative lg:mt-16 mt-6">
      <div className="lg:absolute left-0 hidden lg:flex">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="lg:text-base text-xs">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-cyan-800 lg:text-base text-xs"
                href="/components"
              >
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <p className="lg:text-4xl text-lg text-cyan-800 font-semibold">
          {name}
        </p>
        <p className="lg:text-base text-sm text-gray-400 lg:mt-2">{location}</p>
      </div>
    </header>
  );
}

"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/atoms/Breadcrumb";
import { useAtomValue } from "jotai";
import React from "react";
import { detailCardItem } from "../contains/ContainMostPicked";

export default function HeaderBreadcrumb() {
  const { name, location } = useAtomValue(detailCardItem);

  return (
    <header className="flex items-center justify-center text-center relative mt-16">
      <div className="absolute left-0">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-base">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-cyan-800 text-base"
                href="/components"
              >
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <p className="text-4xl text-cyan-800 font-semibold">{name}</p>
        <p className="text-base text-gray-400 mt-2">{location}</p>
      </div>
    </header>
  );
}

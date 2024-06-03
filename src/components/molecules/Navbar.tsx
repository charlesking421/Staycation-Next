"use client";

import useScroll from "@/hooks/useScroll";
import {
  CalendarSearch,
  CircleFadingPlus,
  Handshake,
  Home,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const data = [
  {
    href: "/",
    label: "Home",
    icon: <Home size={24} className="text-cyan-800" />,
  },
  {
    href: "/",
    label: "Browse by",
    icon: <CalendarSearch size={24} className="text-gray-400" />,
  },
  {
    href: "/",
    label: "Stories",
    icon: <CircleFadingPlus size={24} className="text-gray-400" />,
  },
  {
    href: "/",
    label: "Agents",
    icon: <Handshake size={24} className="text-gray-400" />,
  },
];

export default function Navbar({ logoOnly = false }: { logoOnly?: boolean }) {
  const { isScrolled } = useScroll();

  return (
    <header
      className={twMerge(
        "border-b lg:fixed w-full z-10 top-0",
        isScrolled ? "bg-white/75" : "bg-white"
      )}
    >
      <div
        className={twMerge(
          "flex items-center w-full py-4 lg:container lg:px-0 px-4",
          logoOnly ? "justify-center text-4xl" : "justify-between"
        )}
      >
        <Link href="/">
          <p className="text-3xl font-semibold">
            <span className="text-cyan-600">Stay</span>cation
          </p>
        </Link>
        {!logoOnly && (
          <>
            <div className="hidden lg:block">
              <ul className="flex lg:gap-12">
                {data.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base text-gray-400 font-normal hover:text-cyan-600"
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="lg:hidden bg-white border-t justify-between fixed w-full z-20 left-0 h-14 flex items-center bottom-0 px-8">
              {data.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs flex flex-col justify-center items-center font-normal hover:text-cyan-600"
                >
                  {item.icon}
                  <p className="mt-1 text-gray-400">{item.label}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
}

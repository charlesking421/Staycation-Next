import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "Browse by",
  },
  {
    href: "/",
    label: "Stories",
  },
  {
    href: "/",
    label: "Agents",
  },
];

export default function Navbar({ logoOnly = false }: { logoOnly?: boolean }) {
  return (
    <header className="border-b border-gray-200">
      <div
        className={`flex w-full py-4 lg:container lg:px-0 px-4 ${
          logoOnly ? "justify-center text-4xl" : "justify-between"
        }`}
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

            <div className="lg:hidden bg-white border-t justify-between fixed w-full z-10 left-0 h-14 flex items-center bottom-0 px-8">
              {data.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs flex flex-col justify-center items-center font-normal hover:text-cyan-600"
                >
                  <Home className="text-gray-400" size={24} />
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

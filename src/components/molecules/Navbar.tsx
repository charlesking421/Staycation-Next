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

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <div className="flex justify-between w-full py-4 container">
        <Link href="/">
          <p className="text-3xl font-semibold">
            <span className="text-cyan-600">Stay</span>cation
          </p>
        </Link>
        <div>
          <ul className="flex gap-12">
            {data.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-normal hover:text-cyan-600"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

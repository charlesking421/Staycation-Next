import React from "react";

const data = [
  {
    title: "For Beginners",
    description: ["New Account", "Start Booking a Room", " Use Payments"],
  },
  {
    title: "Explore Us",
    description: [
      "Cookies Policy",
      "Our Careers",
      " Privacy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Connect Us",
    description: [
      "cryptoangel1024@gmail.com",
      "+14062952901",
      "Privacy",
      "Staycation, Bandar Lampung",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-gray-300 py-10 mt-24">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="lg:text-3xl text-2xl font-semibold mb-4 text-black">
            <span className="text-cyan-800">Stay</span>cation
          </h5>
          <p className="lg:text-lg text-xs">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        {data.map((item) => (
          <div key={item.title}>
            <h5 className="lg:text-lg text-base font-semibold mb-4 text-cyan-800">
              {item.title}
            </h5>
            <ul className="lg:text-xl text-xs">
              {item.description.map((desc) => (
                <li className="mb-2" key={desc}>
                  <a href="#" className="hover:text-cyan-700">
                    {desc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 mb-10">
        <p className="lg:text-base text-xs">
          &copy; Copyright 2024 • All rights reserved • Staycation
        </p>
      </div>
    </footer>
  );
}

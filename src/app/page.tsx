import { Button } from "@/components/ui/button";
import { BaggageClaim, Clapperboard, MapPinned } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto container">
      {/* Navbar */}
      <header className="flex justify-between w-full py-4">
        <p className="text-3xl font-semibold">
          <span className="text-cyan-600">Stay</span>cation
        </p>
        <div>
          <ul className="flex gap-4">
            <li className="text-base text-gray-600 font-normal">Home</li>
            <li className="text-base text-gray-600 font-normal">Browse by</li>
            <li className="text-base text-gray-600 font-normal">Stories</li>
            <li className="text-base text-gray-600 font-normal">Agents</li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <div className="grid grid-cols-2 mt-10">
        <div className="col-span-1">
          <h1 className="text-4xl font-semibold">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p className="text-gray-500 text-base w-1/2 mt-5 mb-7">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>

          <Button className="bg-cyan-600 font-light">Show Me Now</Button>

          <div className="flex items-center gap-6 mt-14">
            <div className="flex-col flex gap-2">
              <BaggageClaim className="text-cyan-800" />
              <p className="text-base text-gray-500">
                <span className="text-cyan-600 font-semibold">80,409</span>{" "}
                travelers
              </p>
            </div>
            <div className="flex-col flex gap-2">
              <Clapperboard className="text-cyan-800" />
              <p className="text-base text-gray-500">
                <span className="text-cyan-600 font-semibold">862</span>{" "}
                treasure
              </p>
            </div>
            <div className="flex-col flex gap-2">
              <MapPinned className="text-cyan-800" />
              <p className="text-base text-gray-500">
                <span className="text-cyan-600 font-semibold">1,492</span>{" "}
                cities
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative w-[520px] h-[410px]">
            <Image
              src="/hero-landing.png"
              fill
              priority
              alt="hero-landing-page"
            />
            <div className=" w-[480px] h-[410px] border border-gray-300 absolute -bottom-8 -z-10 rounded-2xl left-20"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

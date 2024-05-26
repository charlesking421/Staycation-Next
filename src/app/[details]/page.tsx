import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  AirVent,
  Bath,
  BedDouble,
  Home,
  Monitor,
  Refrigerator,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";
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

      {/* Image Destination - section */}
      <div className="grid grid-cols-2 gap-8 mt-16">
        <div className="col-span-1">
          <div className="relative w-full h-full">
            <Image src="/detail-village/big.jpg" fill priority alt="big.jpg" />
          </div>
        </div>
        <div className="col-span-1 grid-rows-2 space-y-8">
          <div>
            <div className="relative aspect-video">
              <Image
                src="/detail-village/small-1.jpg"
                fill
                priority
                alt="small-1.jpg"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/detail-village/small.jpg"
                fill
                priority
                alt="small.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Description Destination - section */}
      <div className="grid grid-cols-2 gap-8 mt-16">
        <div className="cols-span-1">
          <p className="text-xl text-cyan-800 mb-4">About the place</p>
          <p className="text-gray-400 font-light text-base">
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits the use of
            repetition and understated development. Minimal techno is thought to
            have been originally developed in the early 1990s by Detroit-based
            producers Robert Hood and Daniel Bell.
          </p>
          <br />
          <p className="text-gray-400 font-light text-base">
            Such trends saw the demise of the soul-infused techno that typified
            the original Detroit sound. Robert Hood has noted that he and Daniel
            Bell both realized something was missing from techno in the
            post-rave era.
          </p>
          <br />
          <p className="text-gray-400 font-light text-base">
            Design is a plan or specification for the construction of an object
            or system or for the implementation of an activity or process, or
            the result of that plan or specification in the form of a prototype,
            product or process. The national agency for design: enabling
            Singapore to use design for economic growth and to make lives
            better.
          </p>

          <div className="grid-cols-4 grid gap-8 mt-6">
            <div className="cols-span-1">
              <BedDouble size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">5</strong> bedroom
              </p>
            </div>
            <div className="cols-span-1">
              <Home size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">1</strong> living room
              </p>
            </div>
            <div className="cols-span-1">
              <Bath size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">2</strong> bathroom
              </p>
            </div>
            <div className="cols-span-1">
              <Utensils size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">1</strong> dining room
              </p>
            </div>
            <div className="cols-span-1">
              <Wifi size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">25</strong> mbps/s
              </p>
            </div>
            <div className="cols-span-1">
              <AirVent size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">7</strong> unit ready
              </p>
            </div>
            <div className="cols-span-1">
              <Refrigerator size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">2</strong> refigrator
              </p>
            </div>
            <div className="cols-span-1">
              <Monitor size={28} className="text-cyan-500" />
              <p className="text-gray-400 font-light mt-2">
                <strong className="text-cyan-800">3</strong> television
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1">2</div>
      </div>
    </main>
  );
}

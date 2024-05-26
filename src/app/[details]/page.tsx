import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/datepicker";
import {
  AirVent,
  Bath,
  BedDouble,
  Home,
  Minus,
  Monitor,
  Plus,
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
        <div className="cols-span-1 p-8">
          <div className="border rounded-xl border-gray-200 px-24 py-12">
            <p className="text-xl text-cyan-800">Start Booking</p>
            <p className="text-4xl text-gray-300 font-light mt-3">
              <span className="text-cyan-500 font-semibold">$280</span> / night
            </p>
            <div className="mt-10">
              <p className="text-cyan-800 mb-4">How long you will stay?</p>
              <div className="flex bg-gray-100 rounded-sm justify-between items-center">
                <Button className="bg-red-400 py-6">
                  <Minus />
                </Button>
                <span className="text-2xl text-gray-300">0</span>
                <Button className="bg-cyan-600 py-6">
                  <Plus />
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-cyan-800 mb-4">Pick a Date</p>
              <DatePickerWithRange />

              <p className="text-base font-light text-gray-300 mt-3">
                You will pay <span className="text-cyan-800">$480</span> USD per
                <span className="text-cyan-800">2 nights</span>
              </p>
              <Button size="lg" className="w-full bg-cyan-600 mt-12 text-base">
                Continue to Book
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion Treasure - section */}
      <div className="mt-16">
        <p className="text-lg text-cyan-800 font-semibold">
          Treasure to Choose
        </p>

        <div className="grid grid-cols-4 gap-8 mt-5">
          <div>
            <div className="relative aspect-video">
              <Image
                src="/treasure-choose/pic-1.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Green Lake</p>
              <p className="text-base text-gray-400">Nature</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/treasure-choose/pic-2.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Dog Clubs</p>
              <p className="text-base text-gray-400">Pool</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/treasure-choose/pic-3.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
              <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
                <p className="font-light text-white">
                  <strong>Popular</strong> Choice
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Labour and Wait</p>
              <p className="text-base text-gray-400">Shopping</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/treasure-choose/pic.jpg"
                fill
                priority
                alt="treasure-choose-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Snorkeling</p>
              <p className="text-base text-gray-400">Beach</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

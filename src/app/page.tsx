import { Button } from "@/components/ui/button";
import { BaggageClaim, Clapperboard, MapPinned, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto container">
      {/* Navbar - section */}
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

      {/* Hero - section */}
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
        <div className="col-span-1 flex justify-end">
          <div className="relative w-[520px] h-[410px]">
            <Image
              className="absolute !-left-20"
              src="/hero-landing.png"
              fill
              priority
              alt="hero-landing-page"
            />
            <div className=" w-[480px] h-[410px] border border-gray-300 absolute -bottom-8 -z-10 rounded-2xl left-0"></div>
          </div>
        </div>
      </div>

      {/* Most Picked - section */}
      <div className="mt-16">
        <p className="text-lg text-cyan-800 font-semibold">Most Picked</p>
        <div className="grid grid-cols-12 gap-4 mt-5">
          <div className="col-span-4">
            <div className="relative w-full h-full">
              <Image
                src="/most-picked/most-picked-big.png"
                fill
                priority
                alt="most-picked-1"
              />
              <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
                <p className="font-light text-white">
                  <strong>$50</strong> per night
                </p>
              </div>
              <div className="absolute bottom-2 left-0 px-6 py-3 z-10">
                <p className="font-semibold text-white text-2xl">Blue Ocean</p>
                <p className="font-light text-white text-lg">
                  Jakarta, Indonesia
                </p>
              </div>

              <div className="bg-gradient-to-t from-black/40 w-full h-full top-0 z-[1] absolute"></div>
            </div>
          </div>
          <div className="col-span-8 grid grid-cols-2 gap-8">
            <div className="col-span-1 space-y-8">
              <div className="relative aspect-video">
                <Image
                  src="/most-picked/pic-1.jpg"
                  fill
                  priority
                  alt="most-picked-1"
                />
                <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
                  <p className="font-light text-white">
                    <strong>$20</strong> per night
                  </p>
                </div>
                <div className="absolute bottom-2 left-0 px-6 py-3 z-10">
                  <p className="font-semibold text-white text-2xl">
                    Ocean Land
                  </p>
                  <p className="font-light text-white text-lg">
                    Bandung, Indonesia
                  </p>
                </div>

                <div className="bg-gradient-to-t from-black/40 w-full h-full top-0 z-[1] absolute"></div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/most-picked/pic-2.jpg"
                  fill
                  priority
                  alt="most-picked-1"
                />
                <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
                  <p className="font-light text-white">
                    <strong>$520</strong> per night
                  </p>
                </div>
                <div className="absolute bottom-2 left-0 px-6 py-3 z-10">
                  <p className="font-semibold text-white text-2xl">
                    Stark House
                  </p>
                  <p className="font-light text-white text-lg">
                    Lampung, Indonesia
                  </p>
                </div>

                <div className="bg-gradient-to-t from-black/40 w-full h-full top-0 z-[1] absolute"></div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="relative aspect-video">
                <Image
                  src="/most-picked/pic-2.jpg"
                  fill
                  priority
                  alt="most-picked-1"
                />
                <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
                  <p className="font-light text-white">
                    <strong>$10</strong> per night
                  </p>
                </div>
                <div className="absolute bottom-2 left-0 px-6 py-3 z-10">
                  <p className="font-semibold text-white text-2xl">Bobox</p>
                  <p className="font-light text-white text-lg">
                    Jogjakarta, Indonesia
                  </p>
                </div>

                <div className="bg-gradient-to-t from-black/40 w-full h-full top-0 z-[1] absolute"></div>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/most-picked/pic.jpg"
                  fill
                  priority
                  alt="most-picked-1"
                />
                <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
                  <p className="font-light text-white">
                    <strong>$930</strong> per night
                  </p>
                </div>
                <div className="absolute bottom-2 left-0 px-6 py-3 z-10">
                  <p className="font-semibold text-white text-2xl">
                    Vinna Vill
                  </p>
                  <p className="font-light text-white text-lg">
                    Malang, Indonesia
                  </p>
                </div>

                <div className="bg-gradient-to-t from-black/40 w-full h-full top-0 z-[1] absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Houses with beauty backyard - section */}
      <div className="mt-16">
        <p className="text-lg text-cyan-800 font-semibold">
          Houses with beauty backyard
        </p>

        <div className="grid grid-cols-4 gap-8 mt-5">
          <div>
            <div className="relative aspect-video">
              <Image
                src="/beauty-backyard/pic-1.jpg"
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
              <p className="text-lg text-cyan-800 mb-1">Tabby Town</p>
              <p className="text-base text-gray-400">Gunung Batu, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/beauty-backyard/pic-2.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Anggana</p>
              <p className="text-base text-gray-400">Bogor, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/beauty-backyard/pic-3.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Seattle Rain</p>
              <p className="text-base text-gray-400">Jakarta, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/beauty-backyard/pic.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Wodden Pit</p>
              <p className="text-base text-gray-400">Wonosobo, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hotels with large living room - section */}
      <div className="mt-16">
        <p className="text-lg text-cyan-800 font-semibold">
          Hotels with large living room
        </p>

        <div className="grid grid-cols-4 gap-8 mt-5">
          <div>
            <div className="relative aspect-video">
              <Image
                src="/large-living-room/pic-1.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Green Park</p>
              <p className="text-base text-gray-400">Tangerang, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/large-living-room/pic-2.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Podo Wae</p>
              <p className="text-base text-gray-400">Madiun, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/large-living-room/pic-3.jpg"
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
              <p className="text-lg text-cyan-800 mb-1">Silver Rain</p>
              <p className="text-base text-gray-400">Bandung, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/large-living-room/pic.jpg"
                fill
                priority
                alt="large-living-room-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Cashville</p>
              <p className="text-base text-gray-400">Wonosobo, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Apartments with kitchen set - section */}
      <div className="mt-16">
        <p className="text-lg text-cyan-800 font-semibold">
          Apartments with kitchen set
        </p>

        <div className="grid grid-cols-4 gap-8 mt-5">
          <div>
            <div className="relative aspect-video">
              <Image
                src="/kitchen-set/pic-1.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">PS Woord</p>
              <p className="text-base text-gray-400">Depok, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/kitchen-set/pic-2.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">One Five</p>
              <p className="text-base text-gray-400">Madiun, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/kitchen-set/pic-3.jpg"
                fill
                priority
                alt="beauty-backyard-1"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Minimal Rain</p>
              <p className="text-base text-gray-400">Bandung, Indonesia</p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video">
              <Image
                src="/kitchen-set/pic.jpg"
                fill
                priority
                alt="kitchen-set-1"
              />
              <div className="absolute top-0 right-0 bg-pink-600 px-6 py-3 rounded-es-2xl">
                <p className="font-light text-white">
                  <strong>Popular</strong> Choice
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg text-cyan-800 mb-1">Stays Home</p>
              <p className="text-base text-gray-400">Wonosobo, Indonesia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback - section */}
      <div className="grid grid-cols-2 mt-24">
        <div className="col-span-1">
          <div className="relative w-[365px] h-[501px]">
            <Image
              className="absolute !left-10 !top-10"
              src="/family-feedback.png"
              fill
              priority
              alt="family-feedback-page"
            />
            <div className=" w-[365px] h-[501px] border border-gray-300 absolute -z-10 rounded-2xl"></div>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-xl font-normal text-cyan-800 mb-8">
            Happy Family
          </h1>
          <div className="flex items-center mb-2">
            <Star size={28} fill="orange" color="orange" />
            <Star size={28} fill="orange" color="orange" />
            <Star size={28} fill="orange" color="orange" />
            <Star size={28} fill="orange" color="orange" />
            <Star size={28} fill="white" color="orange" />
          </div>
          <h1 className="text-4xl font-normal text-cyan-800 w-4/5">
            What a great trip with my family and I should try again next time
            soon ...
          </h1>
          <p className="text-gray-400 text-base w-1/2 mt-5 mb-7">
            Diko Mahendra, Frontend Developer
          </p>

          <Button className="bg-cyan-600 font-light">Read Their Story</Button>
        </div>
      </div>
    </main>
  );
}

import ApartmentWithKitchen from "@/components/molecules/sections/ApartmentWithKitchen";
import Hero from "@/components/molecules/sections/Hero";
import HotelsWithLargeLiving from "@/components/molecules/sections/HotelsWithLargeLiving";
import HouseBeauty from "@/components/molecules/sections/HouseBeauty";
import MostPicked from "@/components/molecules/sections/MostPicked";
import TestimonyMain from "@/components/molecules/testimony/TestimonyMain";

export default function HomeComponent() {
  return (
    <main className="mx-auto container">
      <Hero />
      <MostPicked />
      <HouseBeauty />
      <HotelsWithLargeLiving />
      <ApartmentWithKitchen />
      <TestimonyMain />
    </main>
  );
}

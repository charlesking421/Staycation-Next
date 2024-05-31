import ApartmentWithKitchen from "@/components/molecules/ApartmentWithKitchen";
import Hero from "@/components/molecules/Hero";
import HotelsWithLargeLiving from "@/components/molecules/HotelsWithLargeLiving";
import HouseBeauty from "@/components/molecules/HouseBeauty";
import MostPicked from "@/components/molecules/MostPicked";
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

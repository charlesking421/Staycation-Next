import ApartmentWithKitchen from "@/components/molecules/sections/ApartmentWithKitchen";
import Hero from "@/components/molecules/sections/Hero";
import HotelsWithLargeLiving from "@/components/molecules/sections/HotelsWithLargeLiving";
import HouseBeauty from "@/components/molecules/sections/HouseBeauty";
import MostPicked from "@/components/molecules/sections/MostPicked";
import UserFeedback from "@/components/molecules/UserFeedback";

export default function HomeComponent() {
  return (
    <main className="lg:mx-auto lg:container lg:px-0 px-4 lg:mt-28">
      <Hero />
      <MostPicked />
      <HouseBeauty />
      <HotelsWithLargeLiving />
      <ApartmentWithKitchen />
      <UserFeedback />
    </main>
  );
}

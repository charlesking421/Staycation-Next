import ApartmentWithKitchen from "@/app/(components)/ApartmentWithKitchen";
import Hero from "@/app/(components)/Hero";
import MostPicked from "@/app/(components)/MostPicked";
import UserFeedback from "@/components/molecules/UserFeedback";
import HouseBeauty from "@/app/(components)/HouseBeauty";
import HotelsWithLargeLiving from "@/app/(components)/HotelsWithLargeLiving";

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

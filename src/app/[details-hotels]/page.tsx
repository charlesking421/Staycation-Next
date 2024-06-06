import DetailsHotel from "@/components/pages/details-hotels/DetailsHotel";
import MainLayout from "@/layouts/MainLayout";

type PropsParams = {
  params: {
    "details-hotels": string;
  };
};

export async function generateMetadata({ params }: PropsParams) {
  const route: string = params["details-hotels"];
  const title = route.replaceAll("-", " ");

  return {
    title: `Hotels | ${title}`,
  };
}

export default function page() {
  return (
    <MainLayout>
      <DetailsHotel />
    </MainLayout>
  );
}

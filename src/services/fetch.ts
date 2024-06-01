export async function getData({ url }: { url: string }) {
  const response = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_BASE_URL
        : process.env.NEXT_PUBLIC_BASE_URL_STAGING
    }/json/${url}`
  );
  return response.json();
}

// export async function getData({ url }: { url: string }) {
//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? process.env.NEXT_PUBLIC_BASE_URL
//       : process.env.NEXT_PUBLIC_BASE_URL_STAGING;

//   // eslint-disable-next-line no-console
//   console.log(`Fetching data from: ${baseUrl}/json/${url}`);

//   const response = await fetch(`${baseUrl}/json/${url}`);

//   if (!response.ok) {
//     throw new Error(`Failed to fetch data: ${response.statusText}`);
//   }

//   return response.json();
// }

import fsPromises from "fs/promises";
import path from "path";

export async function getData({ url }: { url: string }) {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), `/public/json/${url}`);
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(String(jsonData));

  return objectData;
}

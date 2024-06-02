/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "example.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "taskpro-website.vercel.app",
      },
    ],
  },
};

export default nextConfig;

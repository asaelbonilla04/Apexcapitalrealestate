/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // NOTE: Placeholder imagery is served from Unsplash for development.
    // Replace these with real Apex Capital Realty photography (ideally
    // self-hosted under /public/images/properties/) before launch.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

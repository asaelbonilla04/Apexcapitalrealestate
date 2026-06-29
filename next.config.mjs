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
      {
        // Used for property photos hosted on Imgur. Once photos are migrated
        // to /public/images/properties/, this entry can be removed.
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        // Jetpack/WordPress Photon CDN — serves agent headshots and other
        // imagery sourced from apexcapitalrealty.com's WordPress site.
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
  },
};

export default nextConfig;

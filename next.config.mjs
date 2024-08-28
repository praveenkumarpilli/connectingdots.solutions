/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themes.pixelwars.org",
        port: "",
        pathname: "/wp/**",
      },
    ],
  },
};

export default nextConfig;

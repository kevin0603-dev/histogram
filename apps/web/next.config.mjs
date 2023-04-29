/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  rewrites: () => [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "api.highstorm.app",
        },
      ],
      destination: "/api/:path*",
    },
    {
      source: "/docs",
      destination: "https://highstorm-docs.vercel.app/",
    },
    {
      source: "/docs/:match*",
      destination: "https://highstorm-docs.vercel.app/:match*",
    },
  ],
  experimental: {
    esmExternals: "loose",
    appDir: true,
  },
};

export default nextConfig;

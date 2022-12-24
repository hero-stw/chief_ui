/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  env: {
    HTTP_ENDPOINT: process.env.HTTP_ENDPOINT,
    ACCOUNT_URL: process.env.ACCOUNT_URL,
  },
};

module.exports = nextConfig;

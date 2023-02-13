/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "news.airbnb.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;

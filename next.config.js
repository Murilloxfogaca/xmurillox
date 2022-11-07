/** @type {import('next').NextConfig} */
const nextConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  reactStrictMode: true,
};

module.exports = nextConfig;

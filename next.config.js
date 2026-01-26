/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/v1/migrations": ["infra/migrations/**"],
    },
  },
};

module.exports = nextConfig;

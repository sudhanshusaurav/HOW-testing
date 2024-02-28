const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  // env: {
  // START_DATE: "10-10-2022",
  // FIRST_RELEASE: "01-02-2023",
  // ENVIRONMENT: "DEVELOPMENT",
  // BASE_URL: "https://api.holdonworld.com/api/v1",
  // TEST_BASE_URL: "http://127.0.0.1:3001/api/v1",
  // CSRF: "/sanctum/csrf-cookie",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/packages/india",
        destination: "/domestic-packages",
      },
    ];
  },
};

module.exports = nextConfig;

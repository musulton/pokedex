/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pokemon",
        permanent: true
      }
    ]
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  reactStrictMode: true,
  env: {
    GRAPHCMS_ENDPOINT: process.env.GRAPHCMS_ENDPOINT,
  },
}

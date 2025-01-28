const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: '/cv',
        destination: '/cv/campbell_catherine.pdf',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/tutoring',
        destination:
          'https://catherine-7f6rpici4-lachlanjc.vercel.app/tutoring',
      },
    ]
  },
}

module.exports = withMDX(nextConfig)

const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
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
})

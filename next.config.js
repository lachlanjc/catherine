const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async rewrites() {
    return [{ source: '/cv', destination: '/cv/campbell_catherine.pdf' }]
  },
})

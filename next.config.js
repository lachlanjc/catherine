const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  async rewrites() {
    return [{ source: '/cv', destination: '/cv/catherine_campbell.pdf' }]
  },
})

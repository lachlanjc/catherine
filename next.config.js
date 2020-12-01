const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  experimental: { optimizeFonts: true },
  pageExtensions: ['js', 'mdx']
})

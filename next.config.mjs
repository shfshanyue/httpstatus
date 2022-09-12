import withBundleAnalyzer from '@next/bundle-analyzer'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import withMDX from '@next/mdx'

const config = {
  swcMinify: true,
  env: {
    gaId: 'UA-',
  },
  webpack (config) {
    return config
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
}

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
  }
})(
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
  })(config)
)

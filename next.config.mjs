import withBundleAnalyzer from '@next/bundle-analyzer'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import withMDX from '@next/mdx'

const config = {
  swcMinify: true,
  env: {
    // 极客时间 ID
    gaId: 'UA-102193749-5',
    // Devtool ID
    gtmId: 'G-B0BG6J2K56',
    baiduToken: 'code-qSWZ8u5lnF'
  },
  images: {
    domains: ['http.cat'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
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

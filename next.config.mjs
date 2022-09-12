import withBundleAnalyzer from '@next/bundle-analyzer'

// ({
//   enabled: process.env.ANALYZE === 'true'
// })

const config = {
  swcMinify: true,
  env: {
    gaId: 'UA-',
  },
  webpack (config) {
    return config
  }
}

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})(config)

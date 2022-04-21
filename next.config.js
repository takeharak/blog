const isProd = process.env.GITHUB_ACTIONS

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/blog' : '',
  basePath: isProd ? '/blog' : '',
}

module.exports = nextConfig

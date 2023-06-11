/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
const path = require('path')

module.exports = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // Disable optimization during export
    unoptimized: true,
  },
}

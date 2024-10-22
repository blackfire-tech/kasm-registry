/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Blackfire Technology',
    description: 'The Blackfire Technology Kasm repository',
    icon: 'https://blackfire-tech.github.io/kasm-registry/1.1/image.png',
    listUrl: 'https://blackfire-tech.github.io/kasm-registry',
    contactUrl: 'https://github.com/blackfire-tech/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['media.discordapp.net', 'image.tmdb.org']
    }
}

module.exports = nextConfig

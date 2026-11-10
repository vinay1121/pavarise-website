/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // static HTML export — works on GitHub Pages, Netlify, Vercel
  images: { unoptimized: true },
}
module.exports = nextConfig

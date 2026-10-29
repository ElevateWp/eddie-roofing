/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/roofing-services', destination: '/services/', permanent: true },
      { source: '/full-re-roofing', destination: '/roof-restoration/', permanent: true },
      { source: '/roof-inspections', destination: '/roof-restoration/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;

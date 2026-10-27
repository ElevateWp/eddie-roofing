/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/sobre', destination: '/about/', permanent: true },
      { source: '/servicos', destination: '/services/', permanent: true },
      { source: '/avaliacoes', destination: '/reviews/', permanent: true },
      { source: '/equipe/:path*', destination: '/team/:path*', permanent: true },
      { source: '/orcamento', destination: '/quote/', permanent: true },
      { source: '/contato', destination: '/contact/', permanent: true },
      { source: '/dicas/:path*', destination: '/roofing-tips/:path*', permanent: true },
      { source: '/roofing-services', destination: '/services/', permanent: true },
      { source: '/roof-maintenance', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-replacements', destination: '/metal-roofing/', permanent: true },
      { source: '/gutter-repairs', destination: '/gutters-and-downpipes/', permanent: true },
      { source: '/tile-and-ridge-tile-repairs', destination: '/roof-repairs/', permanent: true },
      { source: '/roof-leak-repairs', destination: '/roof-repairs/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;

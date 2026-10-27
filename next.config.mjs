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
      { source: '/dicas', destination: '/gutter-care/', permanent: true },
      { source: '/dicas/:path*', destination: '/gutter-care/:path*', permanent: true },
      { source: '/construction-tips', destination: '/gutter-care/', permanent: true },
      { source: '/construction-tips/:path*', destination: '/gutter-care/:path*', permanent: true },
      { source: '/roofing-tips', destination: '/gutter-care/', permanent: true },
      { source: '/roofing-tips/:path*', destination: '/gutter-care/:path*', permanent: true },
      { source: '/new-construction', destination: '/gutter-cleaning/', permanent: true },
      { source: '/renovations-and-extensions', destination: '/downpipe-cleaning/', permanent: true },
      { source: '/sheds-and-outbuildings', destination: '/home-maintenance/', permanent: true },
      { source: '/construction-repairs', destination: '/gutter-cleaning/', permanent: true },
      { source: '/roof-maintenance', destination: '/gutter-cleaning/', permanent: true },
      { source: '/roof-repairs', destination: '/gutter-cleaning/', permanent: true },
      { source: '/gutters-and-downpipes', destination: '/downpipe-cleaning/', permanent: true },
      { source: '/team/tim-green-construction', destination: '/team/esperance-gutter-cleaning/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;

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
      { source: '/gutter-cleaning', destination: '/roof-repairs/', permanent: true },
      { source: '/downpipe-cleaning', destination: '/roof-maintenance/', permanent: true },
      { source: '/home-maintenance', destination: '/roofing-services/', permanent: true },
      { source: '/gutter-care', destination: '/roofing-advice/', permanent: true },
      { source: '/gutter-care/:path*', destination: '/roofing-advice/:path*', permanent: true },
      { source: '/construction-tips', destination: '/roofing-advice/', permanent: true },
      { source: '/construction-tips/:path*', destination: '/roofing-advice/:path*', permanent: true },
      { source: '/roofing-tips', destination: '/roofing-advice/', permanent: true },
      { source: '/roofing-tips/:path*', destination: '/roofing-advice/:path*', permanent: true },
      { source: '/new-construction', destination: '/roofing-services/', permanent: true },
      { source: '/renovations-and-extensions', destination: '/roofing-services/', permanent: true },
      { source: '/sheds-and-outbuildings', destination: '/roofing-services/', permanent: true },
      { source: '/construction-repairs', destination: '/roof-repairs/', permanent: true },
      { source: '/team/esperance-gutter-cleaning', destination: '/team/tts-roofing/', permanent: true },
      { source: '/team/esperance-roof-repairs', destination: '/team/tts-roofing/', permanent: true },
      { source: '/team/tim-green-construction', destination: '/team/tts-roofing/', permanent: true },
    ];
  },
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] },
};
export default nextConfig;

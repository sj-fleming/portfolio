const isProd = process.env.NODE_ENV === 'production';

const config = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default config;

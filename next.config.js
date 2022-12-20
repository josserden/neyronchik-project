const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  images: {
    deviceSizes: [320, 768, 1280],
    formats: ['image/webp'],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
        pathname: '**',
      },
    ],
  },
};

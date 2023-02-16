const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");

const config = {
  swcMinify: true,

  experimental: {
    esmExternals: false,
    styledComponents: false,
  },
  images: {
    disableStaticImages: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  useFileSystemPublicRoutes: true,
  env: {},

  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
    REACT_APP_HOST: process.env.REACT_APP_HOST,
  },

  i18n,

  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    config.module.rules.push({
      test: /\.inline\.svg$/,
      include: [require("path").resolve(__dirname, "src/assets")],
      use: [
        {
          loader: "svg-react-loader",
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins([withImages], config);

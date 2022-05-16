const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

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
  },

  webpack: (config) => {
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

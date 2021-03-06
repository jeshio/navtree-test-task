const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

const config = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@classes': path.resolve(__dirname, 'src/classes'),
    '@modules': path.resolve(__dirname, 'src/modules'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@hocs': path.resolve(__dirname, 'src/hocs'),
    '@helpers': path.resolve(__dirname, 'src/helpers'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@ui-components': path.resolve(__dirname, 'src/modules/UI/components'),
    '@images': path.resolve(__dirname, 'src/images'),
    'ui-widgets': path.resolve(__dirname, 'src/modules/UI/widgets'),
    '@appTypes': path.resolve(__dirname, 'src/appTypes'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
  }),
);

module.exports = config;

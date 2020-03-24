/* eslint-disable @typescript-eslint/no-var-requires */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#5F81F4',
      '@text-color': '#3D3B3C',
    },
  }),
);



const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');
const debugeLessLoader = () => config => {
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
  // 修改less-loader 对 css-modules的配置
  loaders[loaders.length - 3].use[1].options.modules = true;
  loaders[loaders.length - 3].use[1].options.localIdentName = '[local]--[hash:base64:5]';
  return config;
}
module.exports = override(
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),
  debugeLessLoader(),
);
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

console.log(path.resolve(__dirname, 'src'))
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
)

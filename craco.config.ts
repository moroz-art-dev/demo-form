export {};
//eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const CracoLessPlugin = require('craco-less');
//const CracoAntdPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        baseUrl: './src',
        source: 'tsconfig.json',
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    // {
    //   plugin: CracoAntdPlugin,
    //   options: {
    //     customizeTheme: {
    //       '@layout-sider-background': '#4E5AF2',
    //       '@primary-color': '#1DA57A',
    //       '@link-color': '#1DA57A',
    //     },
    //     customizeThemeLessPath: path.join(
    //       __dirname,
    //       'src/assets/styles/theme/variables.less'
    //     ),
    //     babelPluginImportOptions: {
    //       libraryName: 'antd',
    //       libraryDirectory: 'es',
    //       style: true,
    //     },
    //   },
    // },
  ],
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@UI': path.resolve(__dirname, 'src/components/UI'),
      '@sections': path.resolve(__dirname, 'src/components/sections'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@features': path.resolve(__dirname, 'src/redux/features'),
    },
  },
};

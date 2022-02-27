const path = require('path');

module.exports = {
  mode: 'production',
  // 入口
  entry: {
    index: './lib/index.tsx'
  },
  // 打包输出
  output: {
    // 这里用resolve的原因是，不同的操作系统 /和\的路径输出是不一样的
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'Reactkoma',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // 用来解析tsx或者ts文件
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}
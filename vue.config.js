module.exports = {
  devServer: {
    host: 'localhost'
  }
  // 设置代理服务器，避免本地访问提示跨越
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://mockjs.com',
  //       changeOrigin: true
  //     }
  //   }
  // }
};

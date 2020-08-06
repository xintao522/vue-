module.exports = {
  outputDir: "dist",
  lintOnSave: false, //是否保存时eslint校验
  assetsDir: "static",

  // ...
  // 基本路径
  publicPath: "./",
  devServer: {
    host: '0.0.0.0',
    port: "8086",
    hot: true,
    open: false,
    proxy: {
      "/api": {
        target: "http://192.168.1.108:8443/api",  //后台服务地址
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};

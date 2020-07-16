module.exports = {
  outputDir: "dist",
  lintOnSave: false,
  assetsDir: "static",

  // ...
  // 基本路径
  publicPath: "./",
  devServer: {
    port: "8086",
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

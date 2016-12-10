// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'js',
    assetsPublicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
    assetsImage:'image',
    productionSourceMap: true
  },
  dev: {
    port: 8083,
    proxyTable:{
      '/api': {
        target: 'http://192.168.168.190:8000',
        // port:8000,
        secure: false,
        changeOrigin: true
      }
    }
  }
}

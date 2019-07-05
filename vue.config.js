module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.piaoniu.com/',
        changeOrigin: true,
        pathRewrite: {
            
          }
      }
    }
  }
}

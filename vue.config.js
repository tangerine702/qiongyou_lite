const { defineConfig } = require('@vue/cli-service')
require('events').EventEmitter.defaultMaxListeners = 20; // 将MaxListeners的限制数增加到20
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bang.360.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/foo': {
        target: 'https://www.qyer.com',
        changeOrigin: true,
        pathRewrite:{
          '^/foo':''
        }
      },
      "boo":{
        target: 'https://place.qyer.com',
        changeOrigin: true,
        pathRewrite:{
          '^/boo':''
        }
      },
      "poo":{
        target: 'https://bbs.qyer.com',
        changeOrigin: true,
        pathRewrite:{
          '^/poo':''
        }
      },
      "too":{
        target: 'https://plan.qyer.com',
        changeOrigin: true,
        pathRewrite:{
          '^/too':''
        }
      },
      "soo":{
        target: 'https://search.qyer.com',
        changeOrigin: true,
        pathRewrite:{
          '^/soo':''
        }
      },
    }
  }
})

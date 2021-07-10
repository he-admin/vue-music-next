const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  // 在webpack这里配置了devServer，会执行backend里面的代码，该代码在node.js中运行
  devServer: {
    before (app) {
      registerRouter(app)
    }
  }
}

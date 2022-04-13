const path = require('path')
let vars = path.resolve(__dirname, './src/theme/style.less')
module.exports = {
  css: {
    loaderOptions: {
        less: {
            globalVars: {
                "hack": `true; @import "${vars}"`
            }
        }
    }
  },
  pluginOptions: {
    // 添加下面这段。src/style/globalValue.less为存放变量的路径＋文件
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "./src/theme/style.less")]
    }
  },
}

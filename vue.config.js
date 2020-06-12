const PrerenderSPAPlugin = require('prerender-spa-plugin')
var path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

function addStyleResource (rule) {
  rule.use('style-resource')
  .loader('style-resources-loader')
  .options({
      patterns: [
          path.resolve(__dirname, 'src/color.styl')
      ]
  })
}

const proxyConfig = {
  '/api': {
    target: 'https://baidu.com',
    changeOrigin: true,
    pathRewrite: { '^/api': '' }
  }
}
module.exports = {
  assetsDir: 'static',
  publicPath: '/',

  devServer: {
    open: true,
    proxy: proxyConfig
  },

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    config.resolve.alias
      .set('pages', resolve('src/pages'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/about/about.html',
            '/my/my.html'
          ],
          // 默认编译每个.vue文件单独以路由path为文件名包含index.html，如果路由path包含路径且以.html结尾，则直接修改index.html为路由设定文件名，路由名需对应保持一致，且路由mode必须为history，最终访问路径为：http://localhost:8080/xxx/xxx.html
          postProcess (renderedRoute) {
            if (renderedRoute.route.endsWith('.html')) {
              renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
            }
            return renderedRoute
          },
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterTime: 5000,
          })
        })
      ]
    }
  }
}

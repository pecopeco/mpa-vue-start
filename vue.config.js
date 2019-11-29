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
            '/about',
            '/my'
          ],
          server: {
            proxy: proxyConfig
          },
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterTime: 5000,
          })
        })
      ]
    }
  }
}

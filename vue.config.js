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

module.exports = {
  assetsDir: 'static',
  publicPath: '',

  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://baidu.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    config.resolve.alias
      .set('pages', resolve('src/pages'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/my'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

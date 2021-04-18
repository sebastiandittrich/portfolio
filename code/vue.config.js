const { highlight } = require('highlight.js')

module.exports = {
    chainWebpack: config => {
      config.module.rule('md')
        .test(/\.md/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('@evillt/vuedown-loader')
        .loader('@evillt/vuedown-loader')
        .options({
          raw: true,
          highlight: (code, lang) => lang ? highlight(lang, code).value : code
        })
    }
  }

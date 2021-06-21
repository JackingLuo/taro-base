module.exports = {
  env: {
    NODE_ENV: '"production"',
  },
  defineConstants: {},
  mini: {
    //预渲染解决数据量过大和首页白屏时间过长
    // prerender: {
    //   include: ["pages/nodes/nodes"], // `pages/nodes/nodes` 也会参与 prerender
    // },
  },
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
};

require('shelljs/global')
env.NODE_ENV = 'production'

var webpack = require('webpack')
var DeployPlugin = require('deploy-kit/plugins/webpack-plugin')
var deployClient = require('./deploy')
var config = require('./webpack.prod.conf')

config.output.publicPath = '/mizar/static'

config.plugins.push(new DeployPlugin(deployClient))

webpack(config).watch({}, function(err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

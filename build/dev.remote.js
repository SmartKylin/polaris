require('shelljs/global')
env.NODE_ENV = 'production'

var webpack = require('webpack')
var DeployPlugin = require('deploy-kit/plugins/ftp-webpack-plugin')
var config = require('./webpack.prod.conf')

config.output.publicPath = '/mizar/static'

config.plugins.push(
  new DeployPlugin({
    username: 'xiaofeng',
    password: 'xiaofeng',
    hostname: '10.13.3.4'
  }, [
    {reg: /.phtml*$/, to: '/data1/htdocs/mizar/app/views/M'},
    {reg: /.+/, to: '/data1/htdocs/mizar/public/static'}
  ])
)

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

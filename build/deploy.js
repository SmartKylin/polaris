const path = require('path')
const Client = require('deploy-kit/lib/scp2')
const client = new Client()

client.connect({
  host: '10.13.3.4',
  username: 'xiaofeng',
  password: 'xiaofeng'
})

client.config({
  root: path.resolve(__dirname, '../dist'),
  // 要上传的文件
  files: '**',
  // 远程路径
  remoteDir: '/data1/htdocs/mizar'
})

// 自定义目录
client.match(/dist\/(.*)$/, 'public/static/[$1]')

// 自定义后缀
client.match(/dist\/([^\/]+)\.html$/, 'app/views/M/[$1].phtml')

module.exports = client

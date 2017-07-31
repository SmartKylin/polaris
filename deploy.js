module.exports = {
  server: 'root:bbt@10.5.2.1:5004',
  // server: 'xiaofeng:xiaofeng@10.13.3.4:22',
  workspace: __dirname + '/dist',
  ignore: '**/*.map',
  deployTo: '/data1/htdocs/mizar',
  rules: [
    {
      test: /dist\/(.*)$/,
      dest: 'public/static/[$1]'
    },
    {
      test: /dist\/([^\/]+)\.html$/,
      dest: 'app/views/M/[$1].phtml'
    }
  ]
}



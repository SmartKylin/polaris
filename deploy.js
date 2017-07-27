module.exports = {
  server: 'xiaofeng:xiaofeng@10.13.3.4',
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

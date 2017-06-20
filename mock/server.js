/**
 * Created by gayechen on 2017/6/20.
 */
let express = require('express');
let app = express();
let util = require('./utils')
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/mizar/m/channel/statis', function (req, res) {
  // res.setRequestHeader('Access-Control-Allow-Origin:*');

  res.send(util.readJSON('./api/mizar/m/channel/statis'))
});
app.listen(3333);

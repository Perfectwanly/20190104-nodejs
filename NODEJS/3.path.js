//1.引入express框架
var express = require('express');
var path = require('path');
var app = express();
// app.get(/^\/index\/\d{2}$/, function (req,res){
//     res.send('hello world');
// });



app.get('/register/:year/:month/:day',function(req,res){
    console.log(req.params); //获取路由参数
    console.log("年:",req.params.year); //获取路由参数
    console.log("大名:",req.query.name); //获取?后面的查询字符串参数
    res.send('register');
});

app.listen(3000,function(){
    console.log('请访问...');
});
var express = require('express');
var app = express();

var path = require('path');

//定义一个普通中间件
app.use('/',function(req,res,next){
    console.log('先经过我1');
    next();
});

app.use('/',function(req,res,next){
    console.log('先经过我2');
    next(); //执行下一个中间件
});

//定义一个/login
app.get('/login',function(req,res){
    throw new Error('login.html文件找不到');
    res.sendFile(path.join(__dirname,'view/login.html'));
});

//定义一个错误中间件
app.use('/',function(req,res){
    res.send('index');no
});

//定义一个错误中间件
app.use('/',function(err,req,res,next){
    console.log(err.message); //获取到上面抛出来的错误
    res.send('404');
});

app.listen(3000,function(){
    console.log('请访问.....');
});
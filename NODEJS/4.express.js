var express = require('express');
var app = express();

//定义一个中间件(任何请求url都会经过)
app.use('/',function(req,re,next){
    console.log('先经过我');
    next();  //next代表下一个中间件
});

app.all('/',function(req,res){
    console.log('后经过我');
    res.send('index');
});

app.listen(3000,function(){
    console.log('请访问我....');
});
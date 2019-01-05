//1.引入express框架
var express = require('express');
var fs = require('fs');
var path = require('path');

//2.得到框架express的实例app
var app = express();
//3.定义匹配的路由,处理对应的逻辑
app.get('/',function(req,res){
    //之前的做法:1.先读取文件index.html内容  2.把内容给res.end响应出去
    fs.readFile(path.join(__dirname,'view/index.html'),'utf8',function(err,data){
        if(err){
            throw err;
        }
        res.send(data);
    });
});

app.get('/index',function(req,res){
    //如果是匹配/index,则重定向到路由'/'中
    res.redirect('/');
});

//定义get请求,匹配pathname等于/login路由
app.get('/login',function(req,res){
    fs.readFile(path.join(__dirname,'view/login.html'),'utf8',function(err,data){
        if(err){
            throw err;
        }
        res.send(data);
    });
});

//定义get请求,匹配pathname等于/register路由
app.get('/register',function(req,res){
    //使用express的res.sendFile方法,读取内容并响应给客户端浏览器
    res.sendFile( path.join(__dirname,'view/register.html') );
});

//4.启动服务
app.listen(3000,function(){
    console.log('请访问...');
});



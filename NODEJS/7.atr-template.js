var express = require('express');
var app = express();
path = require('path');
var moment = require('moment');

// var timestamp = (new Date()).getTime();
// console.log(timestamp); 

//引入引擎模块
var artTemplate = require('art-template');
var expressArtTemplate = require('express-art-template');

//配置express框架为art-template模板引擎
app.set('views',path.join(__dirname,'view')); //设置视图所在的文件
app.engine('html',expressArtTemplate); //设置html后缀
app.set('view engine','html');   //设置视图引擎上面的.html

//定义过滤器dateFormat
artTemplate.defaults.imports.dateFormat = function(time,format = 'YYYY-MM-DD HH:mm:ss'){
    return moment.unix(time).format(format);
}

app.get('/index',function(req,res){
    res.render('1.index.html',{
        "name" :"江小白",
        "age":19,
        "users":[
            '魏无羡','蓝湛','金陵'
        ],
        time:1546616150
    });
});

app.listen(3000,function(){
    console.log('请访问....');
});

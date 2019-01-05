//1.加载express
var express = require('express');

//2.得到express实例(类似于创建一个 server 对象)
var app = express();

//3.设计路由,匹配路由/,响应数据
app.get('/',function(req,res){
    res.send('hello world'); //默认底层会自动设置编码格式为utf8,所以不用单独设置响应头
});

//4.开启服务,监听端口3000
app.listen(3000,function(){
    console.log('请访问localhost:3000');

});
//1.加载http模块
var http = require('http');

//2,3步骤合在一起
var server = http.createServer(function(req,res){
    console.log('有人请求了');
    res.end('hello world');
});

//4.启动http服务,开始监听3000端口
server.listen(3000,function () {
    console.log('服务已经启动,请访问: http://localhost:3000');
});
var express = require('express');
var app = express();

var path = require('path');

//使用express.static托管静态资源 
app.use('/image',express.static( path.join(__dirname,'image') ));

app.get('/index',(req,res)=>{
   res.sendFile(path.join(__dirname,'public/images.html'));
})
//开启服务
app.listen(3000,function(){
    console.log('请访问http://127.0.0.1:3000');
});
// //导入内置文件模块fs(file System)
// var fs = require('fs');
// //定义一个字符串
// var str = 'hello 111222';
// //写入文件(文件不存在则自动创建)
// fs.writeFile('data.txt',str,'utf8',function(err){
//     console.log(err); //成功返回null
//     if(err){
//         //抛出错误信息
//         throw err;
//     }
//     console.log('写入ok');
// });


var fs = require('fs');
fs.readFile('./data.txt','utf8',function(err,data){
    if(err){
        console.log(err); //打印出错误信息
        throw err; //抛出异常 
    }
    //打印到的文件数据
    console.log(data);
});
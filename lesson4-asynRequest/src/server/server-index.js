
import render from './render'
let express = require('express');
let app = express();
let fs = require('fs');
//静态文件中间件
app.use(express.static('public'));
// "*"匹配所有的路由，都进入下面的逻辑
app.get('*',function (req, res) {
    render(req,res)
});
app.listen(3000,function () {
    console.log("server start at port 3000");
});

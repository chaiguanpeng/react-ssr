import React,{Component} from 'react';
import Home from "../containers/Home";
import Counter from "../containers/Counter";

//在服务端把 react组件变成字符串,renderToString
import {renderToString} from 'react-dom/server';
let express = require('express');
let app = express();
let fs = require('fs');
//静态文件中间件
app.use(express.static('public'));
app.get('/',function (req, res) {
    let html = renderToString(<Counter />);
    console.log(html);
    res.send(
        `
        <!DOCTYPE html>
           <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>ssr</title>
                </head>
                <body>
                    <div id="root">${html}</div>
                    <script src="/client.js"></script>
                </body>
           </html>
        `
    )
});
app.listen(3000,function () {
    console.log("server start at port 3000");
});

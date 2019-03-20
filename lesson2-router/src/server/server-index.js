import React, {Component, Fragment} from 'react';
import {StaticRouter} from 'react-router-dom';
import Home from "../containers/Home";
import Counter from "../containers/Counter";
import routes from '../routes';
//在服务端把 react组件变成字符串,renderToString
import {renderToString} from 'react-dom/server';
import Header from "../components/Header";
let express = require('express');
let app = express();
let fs = require('fs');
//静态文件中间件
app.use(express.static('public'));
// "*"匹配所有的路由，都进入下面的逻辑
app.get('*',function (req, res) {
    let html = renderToString(
        //服务端专用的路由-StaticRouter,必传2参数。目的是为了确保前后端路由的匹配显示
        <StaticRouter context={{}} location={req.path}>
            <Fragment>
                <Header/>
                <div className='container' style={{marginTop:70}}>
                    {routes}
                </div>
            </Fragment>
        </StaticRouter>
    );
    console.log(html);
    res.send(
        `
        <!DOCTYPE html>
           <html lang="en">
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
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

import React, {Component, Fragment} from 'react';
import {StaticRouter} from 'react-router-dom';
import routes from '../routes';
//在服务端把 react组件变成字符串,renderToString
import {renderToString} from 'react-dom/server';
import Header from "../components/Header";
import {Provider} from 'react-redux';
import {getServerStore} from '../store';
export default function (req, res) {
    let context = {};
    let store = getServerStore();
    //创建仓库的时候，仓库里的数据已经有默认值
    let html = renderToString(
        //服务端专用的路由-StaticRouter,必传2参数。目的是为了确保前后端路由的匹配显示
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                <Fragment>
                    <Header/>
                    <div className='container' style={{marginTop:70}}>
                        {routes}
                    </div>
                </Fragment>
            </StaticRouter>
        </Provider>
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
}

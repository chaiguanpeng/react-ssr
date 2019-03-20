import React,{Fragment} from "react";
import ReactDom from "react-dom";
import Counter from "../containers/Counter";
import routes from "../routes";
import Header from '../components/Header'
import {BrowserRouter} from 'react-router-dom';
// 客户端用 ReactDom.hydrate 代替 React.render
// hydrate就是表示把服务器渲染未完成的工作完成，比如说绑定事件
ReactDom.hydrate(<BrowserRouter>
    <Fragment>
        <Header/>
        <div className='container' style={{marginTop:70}}>
            {routes}
        </div>
    </Fragment>
</BrowserRouter>,document.getElementById('root'));

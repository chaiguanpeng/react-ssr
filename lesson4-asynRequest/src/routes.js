import React,{Component,Fragment} from 'react';
import {Route} from 'react-router-dom';
import Home from "./containers/Home";
import Counter from "./containers/Counter";

// 拿路由去匹配跟客户端
export default [
    {
        path:'/',
        component:Home,
        exact:true,
        key:'/',
        loadData:Home.loadData   //加载数据，如果此配置项有个这个属性，那么则意味着需要加载异步数据
    },
    {
        path:'/counter',
        component:Counter,
        key:'/counter'
    }
]


/*
export default (
    <Fragment>
            <Route path="/" exact component={Home}></Route>
            <Route path="/counter"  component={Counter}></Route>
    </Fragment>
)
*/

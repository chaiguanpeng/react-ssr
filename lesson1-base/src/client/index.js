import React from "react";
import ReactDom from "react-dom";
import Counter from "../containers/Counter";
// 客户端用 ReactDom.hydrate 代替 React.render
// hydrate就是表示把服务器渲染未完成的工作完成，比如说绑定事件
ReactDom.hydrate(<Counter/>,document.getElementById('root'));

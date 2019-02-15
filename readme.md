## 什么是服务端渲染
- 由后端渲染html页，
- 只在首页的dom结构是服务端渲染，其它的事件绑定、路由跳转都是客户端渲染的

## 启动服务端渲染的demo
- npm install
- npm run dev

## 服务端渲染
- 页面上的内容是由服务器生产的，示例 src/server/server-index.js

## 客户端渲染
页面上的内容由于浏览器运行JS脚本而渲染到页面上的

- 浏览器访问服务器
- 服务器返回一个空的HTML页面，里面有一个JS资源链接，比如bundle.js
- 浏览器下载JS代码并在浏览器中运行
- 内容呈现在页面上

## npm-run-all 可以批量执行脚本 nodeman启服务，webpack 监听打包
- 示例看 package.json中设置

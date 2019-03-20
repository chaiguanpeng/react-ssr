const path = require('path');
// webpack-node-externals模块(外部提供的node核心模块不打包进来) 比如node中的fs，不需要打包
const nodeExternal = require('webpack-node-externals');
//官方提供的合并webpack配置项的插件 webpack-merge
const merge = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base,{
    target:'node',  //告诉webpack打包的node环境的文件
    entry:'./src/server/server-index.js',
    output:{
        path:path.resolve('build'),
        filename:'server.js'
    },
    //它负责检查所有的引入的核心模块，并且告诉webpack不要把核心模块打包到server.js里面去
    externals:[nodeExternal()]
});

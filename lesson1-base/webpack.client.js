const path = require('path');
//官方提供的合并webpack配置项的插件 webpack-merge
const merge = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base,{
    entry:'./src/client/index.js',
    output:{
        path:path.resolve('public'),
        filename:'client.js'
    }
});

var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: __dirname + '/src',
    entry:"./js/index.js",
    module: {
        rules:[{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options:{
                presets: ['react','es2015']
            }
        }]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    devServer:{
        port:3000,
    }
}
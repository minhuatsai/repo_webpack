const merge = require('webpack-merge');
const common = require('./webpack.config');
const webpack = require('webpack');
//自動產生index.html與打包後的js檔(假設為bundle.js)在一起，並引入此js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    }
});
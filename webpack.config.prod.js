const merge = require('webpack-merge');
const common = require('./webpack.config');
const webpack = require('webpack');
//自動產生index.html與打包後的js檔(假設為bundle.js)在一起，並引入此js
const HtmlWebpackPlugin = require('html-webpack-plugin');
//讓CSS獨立打包成一個css檔(新)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//讓css打包出來為minify的壓縮檔案
const OptimizeCssAssetsPlugin= require("optimize-css-assets-webpack-plugin");
//移除程式碼中的console.log
const DropConsoleWebpackPlugin = require('drop-console-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(
            {
                filename: `./css/[name]_[contenthash].css`
            }
        ),
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
                preset: ["default", { discardComments: { removeAll: true } }]
            }
        }),
        new DropConsoleWebpackPlugin({drop_log:process.env.NODE_ENV === "prod" })
    ]
});
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//每次build的時候清空輸出資料夾
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const environment = process.env.NODE_ENV || 'dev';

/* ---------dev 與 prod 設定注意事項------------------------
1.OptimizeCssAssetsPlugin與DropConsoleWebpackPlugin 在dev環境
Hot reload 時，會造成compile時間變長，因此dev環境不安裝
---------------------------------------------------------*/
module.exports = {
    //如果有一個以上的檔案需要打包，可以傳陣列給entry
    entry: ['./src/App.js'],
    output: {
        filename: `./js/[name]_${environment==='dev'?'[hash]' :'[contenthash]'}.js`,
        path: path.resolve(__dirname, './dist')
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    //將loader的設定寫在module的rules屬性中
    module: {
       //rules的值是一個陣列可以存放多個loader物件
       rules: [
           {
               test: /\.jsx$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-react']
                   }
               }
           },
           {  
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-react']
                   }
               }
            },
            {
                test: /\.(woff2?|ttf|eot)$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 7000,
                    name: '[name].[ext]',
                    outputPath: 'fot/'
                  }
                }
            },
            {
            test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,//10kb
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }
            }
        ]
    },
    devServer: {
        //指定開啟port為3000
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
		new HtmlWebpackPlugin({
            title:'repo',
            template:'./src/index.html',
            chunksSortMode: 'none'
        }),
        /*讓process.env.NODE_ENV的環境設定可以在此webpack.config.js中生效
          因為沒有此套件會發現process.env.NODE_ENV一直拿到development值
          (此套件與NormalModuleReplacementPlugin搭配使用)*/
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
          }),
        //每次build的時候清空輸出資料夾
        new CleanWebpackPlugin(),
    ]
};

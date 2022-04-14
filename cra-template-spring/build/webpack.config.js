const path = require('path');
 // 压缩打包的空格文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');   
// 动态将css和js文件加载到index.html   
const HtmlWebpackPlugin = require('html-webpack-plugin');  
// 打包后删除dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [ 
        // 压缩打包后的空格、引号等文件
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new HtmlWebpackPlugin({             //实例化Html模板模块
            template: path.resolve(__dirname, '../public/index.html'),
            favicon: './public/favicon.ico',
            // filename: './public/index.html',
            manifest: './public/manifest.json'
        }),
        new CleanWebpackPlugin(), 
    ],
    optimization: {        //添加抽离公共代码插件的配置
        splitChunks: {
            cacheGroups: {
                //打包公共模块
                commons: {
                    chunks: 'initial', //initial表示提取入口文件的公共部分
                    minChunks: 2, //表示提取公共部分最少的文件数
                    minSize: 0, //表示提取公共部分最小的大小
                    name: 'commons' //提取出来的文件命名
                }
            }
        },
    },
    module: {       //通过module属性配置babel-loader
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src')
            },
            {                                                 //此处再添加一条rules，用于配置css预处理器信息
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {   //配置图片静态资源的打包信息
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }, 
            {    //配置多媒体资源的打包信息
                test: /\.(mp4|webm|ogg|mp3|wav)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }

        ]
    },
    //resolve核心配置   文件别名、扩展名
    resolve: {  
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images')
        }
    },
    // 配置热更新模块
    devServer: {            //配置热更新模块
        hot: true,
        open: true,
        port: 3500,
        static: '../dist',  // 更换static
        historyApiFallback: true,
        proxy:{
            '/api':{
                target: 'http:// localhost:3000',
                pathRewrite:{
                    '^api': '/api'
                },
                changeOrigin: true
            }
        }
    }
};


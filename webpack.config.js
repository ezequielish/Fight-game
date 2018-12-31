const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const devMode = process.env.NODE_ENV !== 'production';
const config = {
    mode: "development",
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "./"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: './assets/img/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: './assets/img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ]
}

module.exports = config;
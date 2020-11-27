const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: "./src/index.js", //откуда соберать
    mode:'development',

    output: {
        filename: "bundle.js", // коннечный файл сборки
        path: path.resolve(__dirname, 'public') // дирректория сборки
    },
    devServer: {
        port:4200
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }

}
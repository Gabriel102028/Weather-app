const path = require('path');
const htmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpack({
            template: './src/index.html'
        })
    ]
};
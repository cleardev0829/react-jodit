var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: './src/index.js',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ]
    },

    resolve: {
        alias: {
            "jodit-react": './src'
        },
    },

    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js'
    }
};
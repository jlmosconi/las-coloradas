'use strict';

var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        libraryTarget: 'this'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production') // default value if not specified
          }
        })
    ],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    externals: [nodeExternals()]
};
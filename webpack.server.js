const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "/media/[name].[ext]",
                    publicPath: url => url.replace(/build/, ""),
                    emit: false
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    "presets": [
                        ['@babel/preset-env', {
                            "targets": {
                                "esmodules": true,
                            },
                        }],
                        '@babel/preset-react'
                    ],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties"],
                        ["@babel/transform-regenerator"],
                        ["@babel/transform-runtime", {
                            "regenerator": true
                        }]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts/'
                    }
                }]
            }
        ]
    },
    externals: [webpackNodeExternals()]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/index.tsx'],
        vendor: ['./src/vendor.ts'],
        styles: ['./src/styles.scss']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[hash].js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            'react-hot-loader': path.resolve(path.join(__dirname, './node_modules/react-hot-loader')),
            react: path.resolve(path.join(__dirname, './node_modules/react')),
        },
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                cacheDirectory: true,
                babelrc: false,
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                node: "current",
                                browsers: "last 2 versions"
                            }
                        }
                    ],
                    "@babel/preset-typescript",
                    "@babel/preset-react"
                ],
                plugins: [
                    ["@babel/plugin-proposal-class-properties", {
                        loose: true
                    }],
                    "react-hot-loader/babel"
                ]
            }
        }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", {
                loader: "sass-loader",
                options: {
                    includePaths: [path.join(__dirname, "node_modules")]
                }
            }]
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Africa vs. Africa",
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]
};
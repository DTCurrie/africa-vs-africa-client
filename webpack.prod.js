const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        },
        minimize: true,
        runtimeChunk: {
            name: 'runtime'
        },
        moduleIds: 'hashed',
        nodeEnv: 'production',
        mangleWasmImports: true,
        flagIncludedChunks: true,
        occurrenceOrder: true,
        usedExports: true,
        concatenateModules: true,
        sideEffects: true,
        portableRecords: true
    },
    plugins: [
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })
    ]
});
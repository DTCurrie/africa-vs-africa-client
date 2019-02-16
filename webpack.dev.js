const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        },
        minimize: true,
        runtimeChunk: {
            name: 'runtime'
        },
        moduleIds: 'named',
        nodeEnv: 'development',
        mangleWasmImports: false,
        flagIncludedChunks: true,
        occurrenceOrder: true,
        usedExports: true,
        concatenateModules: true,
        sideEffects: true,
        portableRecords: true
    }
});
const path = require('path')

const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    //デバッグのためのSourceMap（ビルド前後の対応関係を記述したファイル）の出力設定
    devtool: 'inline-source-map',
    //webpack-dev-serverの設定
    devServer: {
        static: path.join(__dirname, '/build'),
        open: true,
        port: 3000
    },
})
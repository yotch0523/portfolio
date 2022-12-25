const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //メインとなるjsファイル(エントリーポイント)
    entry: {
        'index': './src/index.tsx',
        'about': './src/pages/About/index.tsx',
    },
    //ファイルの出力設定
    output: {
        path: path.join(__dirname, '/build'), //出力先のディレクトリ（絶対パスで指定）
        filename: '[name].bundle.js' //出力ファイル名
    },
    //対象のファイルを変換するためのloaderを設定
    module: {
        rules: [
            {
                test: /\.tsx?$/, //build対象（loaderを適用するファイル）を指定
                loader: 'ts-loader', //適用するloaderを指定
            },
            {
                test: /\.(png|jpg|jpeg|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/*/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    //importの際に省略する対象の拡張子を配列で指定
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    //pluginの設定
    plugins: [
        new HtmlWebpackPlugin({ //webpackでbuildされたJSやCSSを表示するHTMLを自動的に生成するplugin
            template: './public/index.html', //テンプレートとして使用するHTMLファイルを指定
            filename: 'index.html' //生成するHTMLファイル名
        })
    ],
    optimization: {
        splitChunks: {
            chunks :'all'
        }
    }
}
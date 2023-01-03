const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'index': './src/index.tsx',
        'about': './src/pages/About/index.tsx',
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
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
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    optimization: {
        sideEffects: true,
        splitChunks: {
            chunks :'all'
        }
    }
}
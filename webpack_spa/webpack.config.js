const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/imgs/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: '[path]',
        port: 8000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/main.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/cursos.html',
            template: './src/paginas/cursos.html',
            chunks: 'cursos'
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/inicio.html',
            template: './src/paginas/inicio.html',
            chunks: 'inicio'
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/sobre.html',
            template: './src/paginas/sobre.html',
            chunks: 'sobre'
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/suporte.html',
            template: './src/paginas/suporte.html',
            chunks: 'suporte'
        }),
    ]
}
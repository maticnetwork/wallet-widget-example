const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.css?$/,
            use: ['style-loader', 'css-loader'],
            // exclude: /node_modules/
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'client/images',
                },
            }]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.vue']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bin/')
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({
            cache: true,
            hash: true,
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 100000,
    //         maxSize: 3000000,
    //         maxAsyncRequests: 10,
    //     },
    // },

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 100000,
            maxSize: 3000000,
            maxAsyncRequests: 10,
        },
    },

};

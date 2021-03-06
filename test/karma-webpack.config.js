// This is a webpack style config file for unit testing using mocha
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
 
module.exports = ({ mode }) => {
    return {
        mode,
        entry: path.resolve(__dirname, '.', 'all.tests.js'),
        output: {
            path: path.join(__dirname, '/build'),
            filename: '[name].bundle.js',
        },
        plugins: [
            new CleanWebpackPlugin(),
        ],
        module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/
            },
            { 
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        devtool: mode === 'development' ? 'source-map' : 'none',
        watchOptions: {
            ignored: /node_modules/
        },
        devServer: {
            contentBase: path.join(__dirname, '/build'),
            compress: true,
            port: 9010,
            inline: true,
            //hot: true //If this is false then liveReload implicitly true
        },
        optimization: {
            minimize: mode === 'production' ? true : false,
            splitChunks: {
                chunks: 'all'
            }
        }
    };
};
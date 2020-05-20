const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
 
module.exports = ({ mode }) => {
    return {
        mode,
        entry: path.join(__dirname, '.', 'test.js'),
        output: {
            path: path.join(__dirname, "/test"),
            filename: "test_bundle.js"
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                entry: 'test.js',
                template: path.resolve(__dirname, 'src/', 'index.html')
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: '**/*.test.ts',
                        to: 'test',
                        flatten: true,
                    }
                ]
            }),
            new WebpackShellPlugin({
                onBuildExit: "mocha test_bundle.js"
            })
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
                test: /\.test\.ts$/,
                use: [ 'mocha-loader', 'ts-loader'],
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
            contentBase: path.join(__dirname, '/test'),
            compress: true,
            port: 9010,
            inline: true,
            liveReload: true
            //hot: true
        }
    };
};
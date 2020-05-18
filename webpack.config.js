const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
 
module.exports = ({ mode }) => {
    return {
        mode,
        entry: path.join(__dirname, 'src', 'index.ts'),
        //devtool: 'inline-source-map',
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index_bundle.js"
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                entry: 'index.ts',
                template: path.resolve(__dirname, 'src/', 'index.html')
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        context: 'node_modules/@webcomponents/webcomponentsjs',
                        from: '**/*.js',
                        to: 'webcomponents'
                    }
                ]
            })
        ],
        module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.test.js$/,
                use: 'jest',
                exclude: '/node_modules/'
            },
            {
                test: /\.test.ts$/,
                use: 'ts-jest',
                exclude: '/node_modules/'
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
            contentBase: path.join(__dirname, '/dist'),
            compress: true,
            port: 9000,
            inline: true,
            liveReload: true
            //hot: true
        }
    };
};
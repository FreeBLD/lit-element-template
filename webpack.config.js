const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
 
module.exports = ({ mode }) => {
    return {
        mode,
        entry: path.join(__dirname, 'src', 'index.js'),
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index_bundle.js"
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                entry: 'index.js',
                template: path.resolve(__dirname, 'src/', 'index.html')
            }),
            new CopyWebpackPlugin([
                {
                    context: 'node_modules/@webcomponents/webcomponentsjs',
                    from: '**/*.js',
                    to: 'webcomponents'
                }
            ])
        ],
        devtool: mode === 'development' ? 'source-map' : 'none',
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
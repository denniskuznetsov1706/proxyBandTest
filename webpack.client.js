const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

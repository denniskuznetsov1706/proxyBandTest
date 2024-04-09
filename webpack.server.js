const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

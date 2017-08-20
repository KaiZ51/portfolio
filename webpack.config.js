const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        publicPath: './dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["react", "env"]
                }
            },
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, loader: 'file-loader'},
            {
                test: /\.(png|jpe?g)$/i,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    }
};
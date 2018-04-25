const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["react", "env"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.otf($|\?)/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpe?g)$/i,
                use: 'file-loader'
            }
        ]
    }
};
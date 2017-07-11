const {join} = require('path')
module.exports = {
    entry: "./client/index.js",
    output: {
        path: join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        ]
    },
};
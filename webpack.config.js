const {join} = require('path')
module.exports = {
    entry: "./client/index.js",
    output: {
        path: join(__dirname, 'public'),
        filename: "bundle.js"
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        ]
    },
};
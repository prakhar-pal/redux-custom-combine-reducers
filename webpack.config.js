const path = require('path');
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,  "dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "public"),
        port: 3000,
        compress: true,
        historyApiFallback: true,
    }
}
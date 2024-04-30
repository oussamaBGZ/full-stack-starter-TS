const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./app.ts",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude:/node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
        devMiddleware: {
            writeToDisk: true,
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"index.html"
        })
    ],
    optimization:{
        usedExports:true
    }
}
import path from "path";
const __dirname = path.resolve();

export default {
    entry: {
        app: path.resolve(__dirname, "src/index.ts")
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[contenthash].cjs",
        clean: true
    },
    mode: 'production',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    optimization: {
        usedExports: true,
    }
}

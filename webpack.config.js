const path = require("node:path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: "./dist",
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(ico|png|svg|ttf|otf|eot|woff?2?)$/,
                type: "asset",
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
};

// const webpack = require('webpack');
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    node: false,
    entry: {
        popup: path.resolve("./src/popup/popup.jsx"),
        options: path.resolve("./src/options/options.jsx"),
        background: path.resolve("./src/background/background.js"),
        contentScript: path.resolve("./src/content/contentScript.js")
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                    implementation: require("sass"),
                    sassOptions: {
                        fiber: false,
                    },
                    },
                },
                ],
            },
            {
                type: "asset/resource",
                use: "asset/resource",
                test: /\.(png|jpg|jpeg|gif)$/i,
                
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve("src/static"), 
                    to: path.resolve("dist")
                }
            ]
        }),
        ...getHtmlPlugins(["popup", "options"])
    ],
    resolve:{
        extensions: [".js", ".jsx"]
    },
    output: {
        path: __dirname + "/dist/",
        filename: "[name].js"
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      }

}
function getHtmlPlugins(chunks){
    return chunks.map(chunk => new HtmlWebpackPlugin({
        title: "HelpMeOut",
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}
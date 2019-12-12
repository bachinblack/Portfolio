// const webpack = require('webpack');
const path = require('path');
const glob = require('glob')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin');
const whitelister = require('purgecss-whitelister')
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const commitHash = require('child_process').execSync('git rev-parse --short HEAD').toString().slice(0, -1);;


console.log("creating main for commit " + commitHash + " in " + path.resolve(__dirname, './public/js'));

const PATHS = {
    src: path.join(__dirname, 'src')
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')(),
                                require('cssnano')()
                            ]
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /.(png|woff(2)?|eot|ttf|svg|jpg|jpeg)(\?[a-z0-9=\.]+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './images/[hash].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    },
                    output: {
                        comments: false
                    },
                    // parallel: true,
                    // warnings: true,
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `./styles-${commitHash}.css`,
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
            whitelist: whitelister('node_modules/bootstrap/dist/css/bootstrap.min.css')
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        //// Visualize the size of each plugins in the final js file.
        // new BundleAnalyzerPlugin()
        //// Add global variables to jsK
        // new webpack.DefinePlugin({
        //     __COMMIT_HASH__: JSON.stringify(commitHash),
        // }),
    ],
    entry: {
        main: [
            './src/index.js',
            // './src/App.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: `main-${commitHash}.js`
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        alias: {
            Images: path.resolve(__dirname, 'images'),
            // views: path.resolve(__dirname, 'ouinon')
            // fonts: path.resolve(__dirname, 'node_modules/react-notifications/dist/fonts/'),
            // backgrounds: path.resolve(__dirname, 'ouinon'),
        }
    },
}


const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

const isHot = !!process.env.HOT;
const hashMode = isHot ? 'hash' : 'contenthash';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    entry: {
        main: path.join(__dirname, './src/index.tsx')
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: `[name]-[${hashMode}].js`,
        chunkFilename: `[name]-[${hashMode}].chunk.js`
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            favicon: path.join(__dirname, './public/favicon.ico'),
            template: path.join(__dirname, './public/index.html')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                BABEL_ENV: JSON.stringify(mode),
                NODE_ENV: JSON.stringify(mode)
            }
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    stylesHandler,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());


    } else {
        config.mode = 'development';
    }
    return config;
};

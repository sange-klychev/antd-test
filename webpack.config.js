// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const isHot = !!process.env.HOT;
const hashMode = isHot ? 'hash' : 'contenthash';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: {
        main: path.join(__dirname, './src/index.tsx')
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: `[name]-[${hashMode}].js`,
        chunkFilename: `[name]-[${hashMode}].chunk.js`,
        publicPath: '/'
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                use: 'ts-loader'
            },
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
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

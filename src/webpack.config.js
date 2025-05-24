const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        port: 3002,
        hot: true,
    },
    output: {
        publicPath: 'http://localhost:3002/',
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        overrides: [
                            {
                                test: /\.(js|jsx)$/i,
                                compact: false,
                            },
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new ModuleFederationPlugin({
            name: 'ownership',
            filename: 'remoteEntry.js',
            exposes: {
                './Card': './src/utils/Card.jsx',
                './LabourHourHold': './src/components/LabourHourHold.jsx',
                './MobileService': './src/components/MobileService.jsx',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                    eager: true,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^19.1.0',
                    eager: true,
                },
            },
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../src/'), // fixed path
        },
    },
};